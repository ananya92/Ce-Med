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

// route to get data about a case's alternative contact
router.get("/AlternativeContact/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.PatientDetails_AlternateContact.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/AlternativeContact/storeAlternativeContactData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.PatientDetails_AlternateContact.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.PatientDetails_AlternateContact.update(
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
                db.PatientDetails_AlternateContact.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});

//**************************************************************** */
//PatientDetails_ClinicalInformation
// route to get data about a case's alternative contact
router.get("/ClinicalInformation/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.PatientDetails_ClinicalInformation.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/ClinicalInformation/storeClinicalInformationData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.PatientDetails_ClinicalInformation.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.PatientDetails_ClinicalInformation.update(
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
                db.PatientDetails_ClinicalInformation.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});

/*************************************************************************************** */

//**************************************************************** */
//PatientDetails_EmergencyContact
// route to get data about a case's alternative contact
router.get("/EmergencyContact/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.PatientDetails_EmergencyContact.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/EmergencyContact/storeEmergencyContactData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.PatientDetails_EmergencyContact.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.PatientDetails_EmergencyContact.update(
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
                db.PatientDetails_EmergencyContact.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});


/*************************************************************************************** */

//PatientDetails_GurantorInformation
// route to get data about a case's Gurantor Information
router.get("/GurantorInformation/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.PatientDetails_GurantorInformation.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/GurantorInformation/storeGurantorInformationData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.PatientDetails_GurantorInformation.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.PatientDetails_GurantorInformation.update(
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
                db.PatientDetails_GurantorInformation.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});

/*************************************************************************************** */


/*************************************************************************************** */

//PatientDetails_HospitalVisitInformation
// route to get data about a case's Hospital Visit Information
router.get("/HospitalVisitInformation/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.PatientDetails_HospitalVisitInformation.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/HospitalVisitInformation/storeHospitalVisitInformationData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.PatientDetails_HospitalVisitInformation.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.PatientDetails_HospitalVisitInformation.update(
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
                db.PatientDetails_HospitalVisitInformation.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});

/*************************************************************************************** */




function dateToISOLikeButLocal(date) {
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    const msLocal = date.getTime() - offsetMs;
    const dateLocal = new Date(msLocal);
    const iso = dateLocal.toISOString();
    const isoLocal = iso.slice(0, 19);
    return isoLocal;
}

module.exports = router;