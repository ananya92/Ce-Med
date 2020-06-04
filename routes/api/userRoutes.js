const router = require("express").Router();
const db = require("../../models");
const Sequelize = require("sequelize");
const { compare } = require("bcrypt");


router.post("/sign", (req, res) => {

    console.log(req.body);

    var userData = {
        username: req.body.username,
        password: req.body.password,

    };

    db.User.create(userData)
        .then((data) => {
            console.log(data)
            res.redirect(307);
        })
        .catch(function (err) {
            console.log(err)
            res.status(401).json(err);
        });
});



router.post("/login", (req, respond) => {

    //console.log(req.body.username)

    const { username, password } = req.body;

    db.User.findOne({
        where: {
            username: username
        }
    })
        .then(async (res) => {
            //console.log(res.dataValues)

            const uid = res.dataValues.username
            const pw = res.dataValues.password

            if (username === uid && await compare(password, pw)) {

                console.log("matched")
                respond.status(200).json("matched")


            } else {
                respond.status(401).json({ error: "User does not exist" });
                // console.log("Not matched")
                // res.status(400).json("not-matched")
            }
        })
        .catch(err => {
            respond.status(400).json({ error: err });
        });
});


module.exports = router;