const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get("/", (req, res) => {
    User.find().then((user) => {
        res.json(user);
    });
});

router.post("/", (req, res) => {
    const newUser = new User();
    newUser.email               = req.body.email;
    newUser.firstName           = req.body.firstName;
    newUser.lastName            = req.body.lastName;
    newUser.username            = req.body.username;
    newUser.password            = req.body.password;
    newUser.phoneNumber         = req.body.phoneNumber;
    newUser.age                 = req.body.age;
    newUser.gender              = req.body.gender;
    newUser.height              = req.body.height;
    newUser.weight              = req.body.weight;
    newUser.address.streetOne   = req.body.streetOne;
    newUser.address.streetTwo   = req.body.streetTwo;
    newUser.address.city        = req.body.city;
    newUser.address.state       = req.body.state;
    newUser.address.zipCode     = req.body.zipCode;
    newUser.devices.deviceId    = req.body.deviceId;
    newUser.save().then((user) => {
        res.json(user);
    });
});


router.get("/:id", (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    });

  
   
});


module.exports = router;