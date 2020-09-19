const router = require("express").Router();
const userRoutes = require("./user-routes");
const baseRoutes = require("./base-routes");
const customRoutes = require("./custom-routes");

// User routes
router.use("/user", userRoutes);

// Base routes
router.use("/base", baseRoutes);

// Custom routes
router.use("/custom", customRoutes);

module.exports = router;
