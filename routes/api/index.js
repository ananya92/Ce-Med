const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const userRoutes = require("./userRoutes");

// Whatsplan routes
router.use("/patient", patientRoutes);
router.use("/user", userRoutes);

module.exports = router;
