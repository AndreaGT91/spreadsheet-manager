const XLSX = require("xlsx");
const fs = require("fs");

module.exports = {
  convertXLSX: function(request, response) {
    
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
        
    // Sets all values in cell object
    function updateHeaderCellObject(value) {
      return { t: "s", v: value, r: "<t>" + value + "</t>", h: value, w: value }
    };

    if (fs.existsSync(request.body.filename)) {
      const workbook = XLSX.readFile(request.body.filename, { cellDates: true, dateNF:'yyyy"-"mm"-"dd' });
      // For MVP, we are only handling first sheet in a multi-sheet workbook;
      // Also assuming that there is a header row
      let result = [];

      if (workbook.SheetNames.length > 0) {
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        let i = 1;
        const ref = worksheet["!ref"]; 
        let firstRowNum =  parseInt(ref.substring(1));
        let currentCell = ref[0] + firstRowNum.toString();
        let startSecondRow = ref[0] + (firstRowNum + 1).toString();

        // Loop over headers; when we reach startSecondRow, we are done with headers;
        // Need to ensure none begin with "$" or contain ".", or are null
        // These will be the field names in MongoDB, and those are illegal characters
        // Set empty column headers; XLSX defaults to __EMPTY
        // If key begins with "!", it is informational only
        for (let key in worksheet) {
          if (key === startSecondRow) { break; };
          if (key[0] === "!") { continue; };
          if (key !== currentCell) {
            worksheet[currentCell] = updateHeaderCellObject("Column" + i.toString());
            currentCell = nextCell(currentCell);
          };

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

        result = XLSX.utils.sheet_to_json(worksheet, { dateNF:'yyyy"-"mm"-"dd', defval:"" });
      };

      response.json(result);
    }
    else {
      response.status(404);
    };
  }
};