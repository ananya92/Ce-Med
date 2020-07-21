const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const userRoutes = require("./userRoutes");
const patientDetailsRoutes = require("./patientDetailsRoutes");
const basicInformationRoutes = require("./basicInformationRoutes");

// ceMed routes
router.use("/ceMed", patientRoutes);
router.use("/user", userRoutes);
router.use("/patientDetails", patientDetailsRoutes);
router.use("/basicInformation", basicInformationRoutes);


module.exports = router;
