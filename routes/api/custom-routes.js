const router = require("express").Router();
const customController = require("../../controllers/customController");

// Matches with "/api/custom/:baseName/:id"
router.route("/:baseName/:id")
  .patch(customController.remove); // Has to be patch so we can send model through body.data 

// Matches with "/api/custom/:baseName"
router.route("/:baseName")
  .patch(customController.findAll) // Has to be patch so we can send model through body.data
  .post(customController.create)
  .put(customController.update);

module.exports = router;
