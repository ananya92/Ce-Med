const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const userRoutes = require("./userRoutes");

// ceMed routes
router.use("/ceMed", patientRoutes);
router.use("/user", userRoutes);

module.exports = router;
