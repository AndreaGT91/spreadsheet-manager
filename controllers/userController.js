const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const validateForgotInput = require("../validation/forgot");

// Defining methods for the Users Controller
module.exports = {
  findByEmail: function (request, response) {
    db.Users
      .findOne({ email: request.params.email })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  create: function (request, response) {
    // Form validation
    const { errors, isValid } = validateRegisterInput(request.body);
    // Check validation
    if (!isValid) {
      return response.status(400).json(errors);
    }

    // If user already exists, throw message. Else, create.
    db.Users
      .findOne({ email: request.body.email })
      .then(user => {
        if (user) {
          return response.status(400).json({ email: "Email already exists" });
        } else {
          db.Users
            .create(request.body)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
        };
      })
      .catch(error => response.status(422).json(error));
  },
  login: function (request, response) {
    // Form validation
    const { errors, isValid } = validateLoginInput(request.body);

    // Check validation
    if (!isValid) {
      return response.status(400).json(errors);
    };

    const email = request.body.email;
    const password = request.body.password;

    db.Users
      .findOne({ email })
      .then(user => {
        // Check is user exists
        if (!user) {
          return response.status(404).json({ emailnotfound: "Email not found" });
        };

        // Check password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              // User matched
              // Create JWT Payload
              const payload = {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName
              };
              // Sign token
              jwt.sign(
                payload,
                "secret",
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  response.json({
                    id: user._id,
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              return response
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
          })
          .catch(error => response.status(422).json(error));
      })
      .catch(error => response.status(422).json(error));
  },
  update: function (request, response) {
    db.Users
      .findOneAndUpdate({ _id: request.body._id }, request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  forgotPassword: function (request, response) {
    // Form validation
    const { errors, isValid } = validateForgotInput(request.body);

    // Check validation
    if (!isValid) {
      return response.status(400).json(errors);
    };

    const email = request.body.email;
    const password = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10));

    db.Users
      .findOne({ email })
      .then(user => {
        // Check is user exists
        if (!user) {
          return response.status(404).json({ emailnotfound: "Email not found" });
        } else {
          db.Users
            .findOneAndUpdate({ email }, { password })
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
        };
      })
      .catch(error => response.status(422).json(error));
  }
};