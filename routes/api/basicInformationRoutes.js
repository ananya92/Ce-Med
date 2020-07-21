const router = require("express").Router();

var db = require("../../models");

// route to get data about Comorbidities
router.get("/Comorbidities/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.BasicInformation_Comorbidities.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});


router.post("/Comorbidities/storeComorbiditiesData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.BasicInformation_Comorbidities.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.BasicInformation_Comorbidities.update(
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
                db.BasicInformation_Comorbidities.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});



/*************************************************************** */

// route to get data about Comorbidities
router.get("/Diagnosis/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.BasicInformation_Diagnosis.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});


router.post("/Diagnosis/storeDiagnosisData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.BasicInformation_Diagnosis.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.BasicInformation_Diagnosis.update(
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
                db.BasicInformation_Diagnosis.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});

/*************************************************************** */

// route to get data about Comorbidities
router.get("/PatientStatus/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.BasicInformation_PatientStatus.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});


router.post("/PatientStatus/storePatientStatusData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.BasicInformation_PatientStatus.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.BasicInformation_PatientStatus.update(
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
                db.BasicInformation_PatientStatus.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});


/*************************************************************** */

// route to get data about Comorbidities
router.get("/Vitals/:CaseId", (req, res) => {
    console.log("req.params.CaseId**********");
    console.log(req.params.CaseId);
    db.BasicInformation_Vitals.findAll({
        where: {
            CaseId: req.params.CaseId
        }
    }).then(function (data) {
        console.log(data);
        res.json(data);
    });
});


router.post("/Vitals/storeVitalsData", function (req, res) {
    console.log(req.body, parseInt(req.body.CaseId));
    db.BasicInformation_Vitals.findAll(
        {
            where: {
                CaseId: parseInt(req.body.CaseId)
            }
        }).then(function (data) {

            console.log(data);

            if (data.length > 0) {
                db.BasicInformation_Vitals.update(
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
                db.BasicInformation_Vitals.create(req.body).then(function (data) {
                    res.json(data);
                }).catch(error => {
                    console.log(error);
                });

            }

        })
});


module.exports = router;