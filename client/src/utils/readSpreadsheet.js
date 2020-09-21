import XLSX from "xlsx";
import API from "./API";

// Helper function - makes sure name for new collection is unique
// If name is found, add "1" to end. If that is found, change "1" to "2", and so on
const getUniqueBaseName = async function(baseName, counter) {
  return new Promise(async function(resolve, reject) {
    let newBaseName = baseName;
    let ctr = counter;
    let success = true;

    try {
      await API.getBaseByName(newBaseName)
      .then( async response => {
        if (response.data) {
          // If we've already done an iteration, need to remove old number
          if (ctr > 0) {
            newBaseName = newBaseName.slice(0, newBaseName.length - 1);
          };
  
          ctr++;
          newBaseName = newBaseName + (ctr).toString(); 
          await getUniqueBaseName(newBaseName, ctr)
          .then(response => {
            newBaseName = response;
          });
        };
      });
    }
    catch(error) {
      success = false;
      reject(error);
    }
    finally {
      if (success) {
        resolve(newBaseName);
      };
    };
  });
};

// Reads spreadsheet in fileName, returns new collection (base) name
const readSpreadsheet = async function(fileName) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    let success = true;
    let workbook;
    let result = "";

    // Gets executed when readAsBinaryString (called below) is complete
    reader.onload = async function(event) {

      // Sets all key values in header cell object
      function updateHeaderCellObject(value) {
        return { t: "s", v: value, r: "<t>" + value + "</t>", h: value, w: value }
      };

      // Next cell label, eg: A1:B1, Z2:AA2, ABC10:ABD10, ABZ100:ACA100, AZZ1000:BAA1000
      function nextCell(cell) {
        let next = "";
        // Work from right end of cell name back to first position; skip numbers at end
        for (let i=(cell.length-1); i >= 0; i--) {
          if (/\d/.test(cell[i])) {
            next = cell[i] + next;
          }
          else if (cell[i] === "Z") { 
            next = "A" + next;
            if (i === 0) {
              next = "A" + next;
            };
          }
          else {
            next = String.fromCharCode(cell.charCodeAt(i) + 1) + next;
            if (i > 0) {
              next = cell.substring(0,i) + next;
            }
            break;
          };
        };
        return next;
      };

      try {
        // If we don't format dates, they come in as 5 digit numbers; default format is mm/dd/yy
        workbook = XLSX.read(event.target.result, {type: "binary", cellDates: true, dateNF:'yyyy"-"mm"-"dd' });

        // For MVP, we are only handling first sheet in a multi-sheet workbook;
        // Also assuming that there is a header row
        if (workbook.SheetNames.length > 0) {
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];

          // worksheet object has !ref key which indicates the first and last cells of data
          const ref = worksheet["!ref"]; 
          let i = 1; // Running count of columns in case we have a blank column header
          let firstRowNum =  parseInt(ref.substring(1)); // Extract first row number
          let currentCell = ref[0] + firstRowNum.toString(); // Cell to start reading
          let startSecondRow = ref[0] + (firstRowNum + 1).toString(); // When we reach cell in 2nd row, done reading headers

          // Loop over headers
          // Need to ensure none begin with "$" or contain ".", or are null
          // These will be the field names in MongoDB, and those are illegal characters
          for (let key in worksheet) {
            if (key === startSecondRow) { break; }; // When we reach startSecondRow, we are done with headers
            if (key[0] === "!") { continue; }; // If key begins with "!", it is informational only

            // Set empty column headers; XLSX defaults to __EMPTY
            if (key !== currentCell) {
              worksheet[currentCell] = updateHeaderCellObject("Column" + i.toString());
              currentCell = nextCell(currentCell);
            };

            // Set blank column headers
            if (worksheet[key].v.trim() === "") { 
              worksheet[key] = updateHeaderCellObject("Column" + i.toString()); // Set blank column headers
            }
            else {
              worksheet[key] = updateHeaderCellObject(worksheet[key].v.replace(/\./g, "").trim()); // Remove all "." and extra spaces
  
              if (worksheet[key].v[0] === "$") {
                worksheet[key] = updateHeaderCellObject(worksheet[key].v.substring(1)); // Remove "$" if in first position
              };
            };

            i++; // Running count of columns in case we have a blank column header
            currentCell = nextCell(currentCell); // Keeping track of which cell should be next
          };

          // If defval is not specified, null and undefined values are skipped
          let jsonData = XLSX.utils.sheet_to_json(worksheet, { raw:false, defval:"" });

          // Verify that we actually got data, then create model for new collection
          if (jsonData.length > 0) {
            let firstDataRow = jsonData[0];
            let baseModel = [];
            let newField;

            // Create pairs of field name and field type for model
            for (let key in firstDataRow) {
              newField = { fieldName: key, fieldType: "String" };

              // Make sure cell data is not null or undefined
              if (firstDataRow[key]) {
                if (typeof firstDataRow[key] === "number") {
                  newField.fieldType = "Number";
                }
                else if ((typeof firstDataRow[key] === "string") &&
                        (firstDataRow[key].substr(0,10).match(/^\d{4}-\d{2}-\d{2}$/))) {
                  newField.fieldType = "Date";
                };
              };

              baseModel.push(newField);
            };

            // New collection name: start with file name, remove extension
            // Then, remove anything but letters and numbers, make camel case
            // Can't start with a number - add "n" to front if it does
            let fn = fileName.name.substring(0, fileName.name.lastIndexOf("."));
            let newBaseName = "";
            let needCap = false;

            for (let i=0; i<fn.length; i++) {
              // Check for alphanumeric
              if (/[\w]|_/g.test(fn[i])) {
                // If first character in base name and it's a number, add an "n"
                if ((newBaseName.length === 0) && (/\d/g.test(fn[i]))) {
                  newBaseName = "n";
                };

                if (needCap) {
                  newBaseName = newBaseName + fn[i].toUpperCase();
                  needCap = false;
                }
                else {
                  newBaseName = newBaseName + fn[i];
                };
              }
              else {
                needCap = true; // Skip non-alphanumeric characters; next alphanumeric needs to be capitalized
              };
            };

            await getUniqueBaseName(newBaseName, 0)
            .then( async response => {
              const newBase = {
                creatorID: JSON.parse(localStorage.getItem("userID")),
                baseName: response,
                baseTitle: fn,
                model: baseModel
              };

              // Add entry to Bases collection, then add records to new custom collection
              await API.createBase(newBase)
              .then(() => { 
                return API.createCustom(newBase.baseName, newBase.model, jsonData);
              })
              .then(() => { result = newBase.baseName })
              .catch( async error => {
                // If payload too large, add one row at a time; any other error, delete entry in Bases collection
                if (error.response.status === 413) {
                  for (let i=0; i<jsonData.length; i++) {
                    API.createCustom(newBase.baseName, newBase.model, jsonData[i]);
                  };
                }
                else {
                  await API.deleteBase(newBase.baseName)
                  .then(() => { throw error }); // Pass error on to caller
                };
              });
            });
          } // end jsonData.length > 0
          else {
            throw new Error("Error converting spreadsheet data");
          };
        } // end workbook.SheetNames.length > 0
        else {
          throw new Error("No data in spreadsheet");
        };
      } // end try
      catch(error) {
        success = false;
        reject(error);
      }
      finally {
        if (success) {
          resolve(result);
        };
      };
    }; // end reader.onload

    // Promise resovle/reject handled in onload event handler
    reader.readAsBinaryString(fileName);
  }); // end Promise
};

export default readSpreadsheet;