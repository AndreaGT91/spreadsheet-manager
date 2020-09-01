const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 3001;
const { pid } = process;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.pluralize(null);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/build-a-base",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`PID: ${pid}\n`);
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});