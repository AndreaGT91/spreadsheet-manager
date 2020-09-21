const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createCustomModel = function(collectionName, model) {
  // If model alredy exists, just return it
  if (mongoose.models[collectionName]) {
    return mongoose.models[collectionName];
  };
  
  const newSchema = new Schema({}, { strict: false });

  // Model should always be defined, but in case it isn't, this will prevent runtime error
  if (model) {
    model.forEach(field => newSchema.add(JSON.parse(`{ "${field.fieldName}": "${field.fieldType}" }`)));  
  };
  
  return mongoose.model(collectionName, newSchema);
};

module.exports = createCustomModel;