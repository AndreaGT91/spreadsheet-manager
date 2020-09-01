const db = require("../models");

// Defining methods for the custom controllers
module.exports = {
  findAll: function(request, response) {
    db.createCustom(request.params.baseName, request.body.baseModel)
      .find()
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  create: function(request, response) {
    // If data is array, insertMany; if object, create one
    if (Array.isArray(request.body.data)) {
      db.createCustom(request.params.baseName, request.body.baseModel)
        .insertMany(request.body.data)
        .then(dbModel => response.json(dbModel))
        .catch(error => response.status(422).json(error));
    }
    else {
      db.createCustom(request.params.baseName, request.body.baseModel)
        .create(request.body.data)
        .then(dbModel => response.json(dbModel))
        .catch(error => response.status(422).json(error));
    };
  },
  update: function(request, response) {
    db.createCustom(request.params.baseName, request.body.baseModel)
      .findByIdAndUpdate(request.body.data._id, request.body.data, { new: true })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  remove: function(request, response) {
    db.createCustom(request.params.baseName, request.body.baseModel)
      .findByIdAndDelete(request.params.id)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
