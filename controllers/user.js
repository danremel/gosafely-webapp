const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get("/", (req, res) => {
    User.find().then((user) => {
        res.json(user);
    });
});
router.post("/", (req, res) => {
    res.send("Hello");
    const newUser = new User();
    console.log("POST the req body", req.body);
});
router.get("/:id", (req, res) => {
    User.findById(req.params._id).then((user) => {
        res.json(user);
    });

  
    newUser.email       = req.body.email;
    newUser.firstName   = req.body.firstName;
    newUser.lastName    = req.body.lastName;
    newUser.username    = req.body.username;
    newUser.password    = req.body.password;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.age         = req.body.age;
    newUser.gender      = req.body.gender;
    newUser.height      = req.body.height;
    newUser.weight      = req.body.weight;
    newUser.streetOne   = req.body.streetOne;
    newUser.streetTwo   = req.body.streetTwo;
    newUser.city        = req.body.city;
    newUser.state       = req.body.state;
    newUser.zipCode     = req.body.zipCode;
    newUser.deviceId    = req.body.deviceId;
    newUser.save();
});


module.exports = router;