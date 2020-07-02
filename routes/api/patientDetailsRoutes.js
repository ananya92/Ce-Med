const router = require("express").Router();

var db = require("../../models");

// route to get data about a case's hospital information
router.get("/hospitalInformation/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.PatientDetails_HospitalInformation.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});


router.post("/hospitalInformation/storeHospitalInformationData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.PatientDetails_HospitalInformation.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.PatientDetails_HospitalInformation.update(
                    req.body,
                    {
                        where: {
                            CaseId: req.body.CaseId
                        }
                    }
                ).then(function (data) {
                    res.json(data);
                });
            } else {
                console.log("Record not found, creating new record");
                db.PatientDetails_HospitalInformation.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});

function dateToISOLikeButLocal(date) {
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    const msLocal = date.getTime() - offsetMs;
    const dateLocal = new Date(msLocal);
    const iso = dateLocal.toISOString();
    const isoLocal = iso.slice(0, 19);
    return isoLocal;
}

module.exports = router;