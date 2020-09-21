const router = require("express").Router();
const baseController = require("../../controllers/baseController");

// Matches with "/api/base"
router.route("/")
  .post(baseController.create)
  .put(baseController.update);

// Matches with "/api/base/id/:id"
router.route("/id/:id")
  .get(baseController.findByUserId);

// Matches with "/api/base/name/:name"
router.route("/name/:name")
  .get(baseController.findByName)
  .delete(baseController.remove);

module.exports = router;
