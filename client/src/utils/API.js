import axios from "axios";
import path from "path";
import XLSX from "xlsx";

export default {

  // Get user info
  getOneUser: function(email) {
    return axios.get("/api/user/" + email);
  },

  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  updateUser: function(userData) {
    return axios.put("/api/user", userData);
  },

  getBasesByUser: function(id) {
    return axios.get("/api/base/id/" + id);
  },

  getBaseByName: function(name) {
    return axios.get("/api/base/name/" + name)
  },

  createBase: function(baseData) {
    return axios.post("/api/base", baseData);
  },

  updateBase: function(baseData) {
    return axios.put("/api/base", baseData);
  },

  deleteBase: function(id) {
    return axios.delete("/api/base/" + id);
  },

  getCustom: async function(baseName) {
    await this.getBaseByName(baseName)
    .then( async response => {
      if (response.data) {
        const res = await axios.patch("/api/custom/" + baseName, response.data.model) // Has to be patch so we can send model through body.data
        // console.log("res.data: ", res.data);
        return res
      }
      else { return [] }
    })
    // const response = await this.getBaseByName(baseName)
    // if (response.data) {
    //   const res = await axios.patch("/api/custom/" + baseName, response.data.model) // Has to be patch so we can send model through body.data
    //   console.log("res.data: ", res.data);
    //   return res
    // }
    // else { return response }
  },

  createCustom: async function(baseName, baseData) {
    const response = await this.getBaseByName(baseName);
    if (!response.data) { return response }
    return axios.post("/api/custom/" + baseName, { baseModel: response.data.model, data: baseData });
  },

  updateCustom: async function(baseName, baseData) {
    const response = await this.getBaseByName(baseName);
    if (!response.data) { return response }
    return axios.put("/api/custom/" + baseName, { baseModel: response.data.model, data: baseData });
  },

  deleteCustom: async function(baseName, id) {
    const response = await this.getBaseByName(baseName);
    if (!response.data) { return response }
    return axios.patch("/api/custom/" + baseName + "/" + id, response.data.model); // Has to be patch so we can send model through body.data
  },

  getUniqueBaseName: async function(baseName, counter) {
    let newBaseName = baseName;
    const response = await this.getBaseByName(newBaseName);
    if (response.data) { 
      counter++;
      newBaseName = newBaseName + (counter).toString(); 
    };
    // Getting error that .splice is not a function
    // if (response.data.length > 0) {
    //   if (counter > 0) {
    //     newBaseName = newBaseName.splice(0, newBaseName.length - 1);
    //   };
    //   counter++;
    //   newBaseName = newBaseName + (counter).toString();
    //   this.getUniqueBaseName(newBaseName, counter);
    // };
    return newBaseName;
  },

  readSpreadsheet: async function(fileName) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let success = true;
      let workbook;

      reader.onload = function(event) {
        console.log("event: ", event.target);
        try {
          workbook = XLSX.read(event.target.result, {type: "binary", cellDates: true, dateNF:'yyyy"-"mm"-"dd' });
        }
        catch(error) {
          success = false;
          reject();
        }
        finally {
          console.log("workbook1: ", workbook);
          if (success) {
            resolve(workbook);
          };
        };
      };

      reader.readAsBinaryString(fileName);
    });
  }

  //   let reader = new FileReader();
  //   let workbook = {};
  //   try {
  //     reader.onload = function(event) {
  //       console.log("event: ", event.target);
  //       workbook = XLSX.read(event.target.result, {type: 'binary', cellDates: true, dateNF:'yyyy"-"mm"-"dd' });
  //       console.log("workbook1: ", workbook);
  //     };
  //     reader.readAsBinaryString(fileName);
  //   }
  //   catch(error) {
  //     console.log("Could not read file: ", error);
  //     workbook = {};
  //   }
  //   finally {
  //     console.log("workbook: ", workbook);
  //     return new Promise((resolve, reject) => {
  //       if (workbook) {
  //         resolve(workbook);     
  //       } 
  //       else {
  //         reject();
  //       };
  //    });
  //   };
  // }

  // Reads spreadsheet in fileName, returns new collection (base) name
//   readSpreadsheet: function(fileName) {

//     function convertXLSX(fn) {
    
//       // Next cell label, eg: A1:B1, Z2:AA2, ABC10:ABD10, ABZ100:ACA100, AZZ1000:BAA1000
//       function nextCell(cell) {
//         let next = "";
//         // Work from right end of cell name back to first position; skip numbers at end
//         for (let i=(cell.length-1); i >= 0; i--) {
//           if (/\d/.test(cell[i])) {
//             next = cell[i] + next;
//           }
//           else if (cell[i] === "Z") { 
//             next = "A" + next;
//             if (i === 0) {
//               next = "A" + next;
//             };
//           }
//           else {
//             next = String.fromCharCode(cell.charCodeAt(i) + 1) + next;
//             if (i > 0) {
//               next = cell.substring(0,i) + next;
//             }
//             break;
//           };
//         };
//         return next;
//       };
          
//       // Sets all values in cell object
//       function updateHeaderCellObject(value) {
//         return { t: "s", v: value, r: "<t>" + value + "</t>", h: value, w: value }
//       };
  
//       console.log("IN CONVERTXLSX");
//       let result = [];
//       let workbook = {};
//       let reader = new FileReader();
//       reader.readAsBinaryString(fn);
//       console.log("filetype: ", fn.type);
//       reader.onload = function(e) {   //Handle the load event. Triggered when the read operation completes.
//         let data = e.target.result;
//         try {
//           workbook = XLSX.read(data, {type: 'binary', cellDates: true, dateNF:'yyyy"-"mm"-"dd' });
//         }
//         catch(error) {
//           console.log("Could not read file: ", error);
//         };
//         console.log("workbook: ", workbook);
//       // if (fs.existsSync(request.body.filename)) {
//         // const workbook = XLSX.readFile(request.body.filename, { cellDates: true, dateNF:'yyyy"-"mm"-"dd' });
//         // For MVP, we are only handling first sheet in a multi-sheet workbook;
//         // Also assuming that there is a header row
//         // let result = [];
  
//         if (workbook.SheetNames.length > 0) {
//           const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//           console.log("worksheet: ", worksheet);

//           let i = 1;
//           const ref = worksheet["!ref"]; 
//           let firstRowNum =  parseInt(ref.substring(1));
//           let currentCell = ref[0] + firstRowNum.toString();
//           let startSecondRow = ref[0] + (firstRowNum + 1).toString();
  
//           // Loop over headers; when we reach startSecondRow, we are done with headers;
//           // Need to ensure none begin with "$" or contain ".", or are null
//           // These will be the field names in MongoDB, and those are illegal characters
//           // Set empty column headers; XLSX defaults to __EMPTY
//           // If key begins with "!", it is informational only
//           // for (let key in worksheet) {
//           //   if (key === startSecondRow) { break; };
//           //   if (key[0] === "!") { continue; };
//           //   if (key !== currentCell) {
//           //     worksheet[currentCell] = updateHeaderCellObject("Column" + i.toString());
//           //     currentCell = nextCell(currentCell);
//           //   };
  
//           //   // if (worksheet[key].v.trim() === "") { 
//           //   //   worksheet[key] = updateHeaderCellObject("Column" + i.toString()); // Set blank column headers
//           //   // }
//           //   // else {
//           //   //   worksheet[key] = updateHeaderCellObject(worksheet[key].v.replace(/\./g, "").trim()); // Remove all "." and extra spaces
  
//           //   //   if (worksheet[key].v[0] === "$") {
//           //   //     worksheet[key] = updateHeaderCellObject(worksheet[key].v.substring(1)); // Remove "$" if in first position
//           //   //   };
//           //   // };
  
//           //   i++; // Running count of columns in case we have a blank column header
//           //   currentCell = nextCell(currentCell); // Keeping track of which cell should be next
//           // };
  
//           result = XLSX.utils.sheet_to_json(worksheet, { dateNF:'yyyy"-"mm"-"dd', defval:"" });
//           console.log("result1: ", result);
//         };
  
//         // response.json(result);
//       }
//       // else {
//       //   response.status(404);
//       // };
//       console.log("result2: ", result);
//       return result;
//     };
  

//     let spreadsheet = convertXLSX(fileName);
//     console.log("spreadsheet: ", spreadsheet);
//     // axios.post("/api/xlsx", { filename: fileName })
//     //   .then( async response => { 
//     //     console.log("response.data ", response.data);
//     //     const fileData = response.data;
//     //     if (fileData.length === 0) {
//     //       return ""
//     //     };

//     //     // Examine first row to get column headers and field types
//     //     const firstRow = fileData[0]; 
        
//     //     const baseModel = [];
//     //     let newField;

//     //     // Create pairs of field name and field type to create model for new collection model
//     //     for (let key in firstRow) {
//     //       newField = {};
//     //       newField.fieldName = key;

//     //       // Make sure cell data is not null or undefined
//     //       if (!firstRow[key]) {
//     //         newField.fieldType = "String";
//     //       }
//     //       else if (typeof firstRow[key] === "number") {
//     //         newField.fieldType = "Number";
//     //       }
//     //       else if (typeof firstRow[key] === "string") {
//     //         if (firstRow[key].substr(0,10).match(/^\d{4}-\d{2}-\d{2}$/)) {
//     //           newField.fieldType = "Date";
//     //         }
//     //         else {
//     //           newField.fieldType = "String";
//     //         };
//     //       }
//     //       else {
//     //         newField.fieldType = "String";
//     //       };

//     //       baseModel.push(newField);
//     //     };

//     //     // Start with file name, remove anything but letters and numbers, make camel case
//     //     // Can't start with a number - add "n" to front if it does
//     //     let fn = path.basename(fileName, path.extname(fileName));
//     //     let newBaseName = "";
//     //     let needCap = false;
//     //     for (let i=0; i<fn.length; i++) {
//     //       if (/[\w]|_/g.test(fn[i])) {
//     //         if ((newBaseName.length === 0) && (/\d/g.test(fn[i]))) {
//     //           newBaseName = "n";
//     //         };

//     //         if (needCap) {
//     //           newBaseName = newBaseName + fn[i].toUpperCase();
//     //         }
//     //         else {
//     //           newBaseName = newBaseName + fn[i].toLowerCase();
//     //         };
//     //         needCap = false;
//     //       }
//     //       else {
//     //         needCap = true;
//     //       };
//     //     };

//     //     newBaseName = await this.getUniqueBaseName(newBaseName, 0)

//     //     const newBase = {
//     //       creatorID: JSON.parse(localStorage.getItem("userID")),
//     //       baseName: newBaseName,
//     //       model: baseModel
//     //     };

//     //     // Add entry to Bases collection, then add records to new custom collection
//     //     this.createBase(newBase)
//     //     .then(() => { return axios.post("/api/custom/" + newBase.baseName, { baseModel: newBase.model, data: fileData })})
//     //     .then(() => { return newBase.baseName })
//     //     .catch(error => {
//     //       console.log("Error creating database: ", error);
//     //       return ""
//     //     });
//     //   })
//     //   .catch(error => {
//     //     console.log("Error reading file: ", error)
//     //     return ""
//     //   });
//   }
};