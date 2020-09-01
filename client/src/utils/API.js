import axios from "axios";
import path from "path";

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

  // Reads spreadsheet in fileName, returns new collection (base) name
  readSpreadsheet: function(fileName) {
    axios.post("/api/xlsx", { filename: fileName })
      .then( async response => { 
        const fileData = response.data;
        if (fileData.length === 0) {
          return ""
        };

        // Examine first row to get column headers and field types
        const firstRow = fileData[0]; 
        
        const baseModel = [];
        let newField;

        // Create pairs of field name and field type to create model for new collection model
        for (let key in firstRow) {
          newField = {};
          newField.fieldName = key;

          // Make sure cell data is not null or undefined
          if (!firstRow[key]) {
            newField.fieldType = "String";
          }
          else if (typeof firstRow[key] === "number") {
            newField.fieldType = "Number";
          }
          else if (typeof firstRow[key] === "string") {
            if (firstRow[key].substr(0,10).match(/^\d{4}-\d{2}-\d{2}$/)) {
              newField.fieldType = "Date";
            }
            else {
              newField.fieldType = "String";
            };
          }
          else {
            newField.fieldType = "String";
          };

          baseModel.push(newField);
        };

        // Start with file name, remove anything but letters and numbers, make camel case
        // Can't start with a number - add "n" to front if it does
        let fn = path.basename(fileName, path.extname(fileName));
        let newBaseName = "";
        let needCap = false;
        for (let i=0; i<fn.length; i++) {
          if (/[\w]|_/g.test(fn[i])) {
            if ((newBaseName.length === 0) && (/\d/g.test(fn[i]))) {
              newBaseName = "n";
            };

            if (needCap) {
              newBaseName = newBaseName + fn[i].toUpperCase();
            }
            else {
              newBaseName = newBaseName + fn[i].toLowerCase();
            };
            needCap = false;
          }
          else {
            needCap = true;
          };
        };

        newBaseName = await this.getUniqueBaseName(newBaseName, 0)

        const newBase = {
          creatorID: JSON.parse(localStorage.getItem("userID")),
          baseName: newBaseName,
          model: baseModel
        };

        // Add entry to Bases collection, then add records to new custom collection
        this.createBase(newBase)
        .then(() => { return axios.post("/api/custom/" + newBase.baseName, { baseModel: newBase.model, data: fileData })})
        .then(() => { return newBase.baseName })
        .catch(error => {
          console.log("Error creating database: ", error);
          return ""
        });
      })
      .catch(error => {
        console.log("Error reading file: ", error)
        return ""
      });
  }
};