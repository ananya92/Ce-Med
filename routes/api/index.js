const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const userRoutes = require("./userRoutes");
const patientDetailsRoutes = require("./patientDetailsRoutes");

// ceMed routes
router.use("/ceMed", patientRoutes);
router.use("/user", userRoutes);
router.use("/patientDetails", patientDetailsRoutes);

module.exports = router;
