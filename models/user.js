const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: "Email address is required",
    index: { unique: true },
    match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

userSchema.virtual("fullName").get(function () {
  return this.lastName + ", " + this.firstName;
});

// TODO: Pre and post save() hooks are not executed on update(), findOneAndUpdate(), etc. 
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  };
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(SALT_WORK_FACTOR));
  next();
});

// ********Had trouble making this work in controller; added compare logic in controller and working now, may not need this code************
userSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;