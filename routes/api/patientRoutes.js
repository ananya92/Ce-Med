const router = require("express").Router();

var db = require("../../models");

router.get('/patients', (req, res) => {
	db.Patient.findAll().then(function (patients) {
		res.json(patients);
	});
});

// route to get data about a particular event
router.get("/cases/:patientId", function (req, res) {
	db.Case.findAll({
		where: {
			PatientId: req.params.patientId
		}
	}).then(function (data) {
		res.json(data);
	});
});

router.post("/storeRespiratorySystemPatientData", function (req, res) {
	console.log(req.body, parseInt(req.body.CaseId));
	db.Respiratory_System.findAll(
		{
			where: {
				CaseId: parseInt(req.body.CaseId)
			}
		}).then(function (data) {
			var today = dateToISOLikeButLocal(new Date());
			var recordFound = false;
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				var createdAt = dateToISOLikeButLocal(data[i].dataValues.createdAt);
				if (createdAt.slice(0, 10) === today.slice(0, 10)) {
					console.log("Record found, updating record");
					recordFound = true;
					const sliced = Object.keys(req.body).slice(2).reduce((result, key) => {
						result[key] = req.body[key];
						return result;
					}, {});
					var dateUpdated = today.replace('T', ' ');
					sliced.updatedAt = dateUpdated;
					db.Respiratory_System.update(
						sliced,
						{
							where: {
								createdAt: data[i].dataValues.createdAt,
								CaseId: req.body.CaseId
							}
						}
					).then(function (data) {
						res.json(data);
					});
					break;
				}
			}
			if (!recordFound) {
				console.log("Record not found, creating new record");
				const sliced = Object.keys(req.body).slice(1).reduce((result, key) => {
					result[key] = req.body[key];
					return result;
				}, {});
				var dateCreated = today.replace('T', ' ');
				sliced.createdAt = dateCreated;
				db.Respiratory_System.create(sliced).then(function (data) {
					res.json(data);
				}).catch(error => {
					console.log(error);
				});
			}
		});
});

// Function to convert the ISO time to local timezone
function dateToISOLikeButLocal(date) {
	const offsetMs = date.getTimezoneOffset() * 60 * 1000;
	const msLocal = date.getTime() - offsetMs;
	const dateLocal = new Date(msLocal);
	const iso = dateLocal.toISOString();
	const isoLocal = iso.slice(0, 19);
	return isoLocal;
}

module.exports = router;