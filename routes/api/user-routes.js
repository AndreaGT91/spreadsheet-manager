const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/:email"
router.route("/:email")
  .get(userController.findByEmail);

// Matches with "/api/user/Login"
router.route("/Login")
  .post(userController.login);

// Matches with "/api/user/forgotpassword"
router.route("/forgotpassword")
  .post(userController.forgotPassword);

// Matches with "/api/user"
router.route("/")
  .post(userController.create)
  .put(userController.update);

module.exports = router;
