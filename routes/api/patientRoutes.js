const router = require("express").Router();

var db = require("../../models");

router.get('/patients', (req, res) => {
    db.Patient.findAll().then(function(patients) {
        res.json(patients);
    });
});

	// route to get data about a particular event
    router.get("/cases/:patientId", function(req, res) {
    	db.Case.findAll({
      		where: {
        		PatientId: req.params.patientId,
      		}
    	}).then(function(data) {
      		res.json(data);
    	});
	});

module.exports = router;