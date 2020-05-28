const router = require("express").Router();

var db = require("../../models");

router.get('/', (req, res) => {
    db.Patient.findAll().then(function(patients) {
        res.json(patients);
    });
});

module.exports = router;