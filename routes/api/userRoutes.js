const router = require("express").Router();
var db = require("../../models");
var Sequelize = require("sequelize");
const cors = require("cors");
const isAuthenticated = require("../../config/middleware/IsAuthenticated")



router.post("/sign", (req, res) => {

    console.log(req.body);

    var userData = {
        username: req.body.username,
        password: req.body.password,

    };

    db.User.create(userData)
        .then((data) => {
            console.log(data)
            res.redirect("/")
        })
        .catch(function (err) {
            console.log(err)
            res.sendStatus(400).json(err);
        });
});


router.post("/login", (req, res) => {

    console.log(req.body.username)

    db.User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    console.log("matched")
                    res.redirect("/")

                }
            } else {
                // res.status(400).json({ error: "User does not exist" });
                console.log("unmatched")
            }
        })
        .catch(err => {
            res.status(400).json({ error: err });
        });
});


module.exports = router;