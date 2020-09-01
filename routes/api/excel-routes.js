const router = require("express").Router();
const xlsxController = require("../../controllers/xlsxController");

// Matches with "/api/xlsx"
router.route("/").post(xlsxController.convertXLSX);

module.exports = router;
