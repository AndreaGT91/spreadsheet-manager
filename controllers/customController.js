const db = require("../models");

// Defining methods for the custom controllers
module.exports = {
  findAll: function(request, response) {
    db.createCustomModel(request.params.baseName, request.body.model)
      .find()
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  create: function(request, response) {
    // If data is array, insertMany; if object, create one
    if (Array.isArray(request.body.data)) {
      db.createCustomModel(request.params.baseName, request.body.model)
        .insertMany(request.body.data)
        .then(dbModel => response.json(dbModel))
        .catch(error => response.status(422).json(error));
    }
    else {
      db.createCustomModel(request.params.baseName, request.body.model)
        .create(request.body.data)
        .then(dbModel => response.json(dbModel))
        .catch(error => response.status(422).json(error));
    };
  },
  update: function(request, response) {
    db.createCustomModel(request.params.baseName, request.body.model)
      .findByIdAndUpdate(request.body.data._id, request.body.data, { new: true })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  remove: function(request, response) {
    db.createCustomModel(request.params.baseName, request.body.model)
      .deleteOne({ baseName: request.params.baseName })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
