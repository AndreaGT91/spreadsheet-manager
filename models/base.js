const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const baseSchema = new Schema({
  creatorID: { type: Schema.Types.ObjectId, required: true },
  baseName: { type: String, required: true },
  baseTitle: { type: String, required: true },
  model: [{
    fieldName: String,
    fieldType: { 
      type: String,
      enum: ["String", "Number", "Date"] }
  }]
});

const Bases = mongoose.model("Bases", baseSchema);

module.exports = Bases;