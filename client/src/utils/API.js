import axios from "axios";

export default {

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
  }
};