const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get("/", (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

router.get("/:id", (req, res) => {
    User.findById(req.params._id).then((user) => {
        res.json(user);
    })
})

router.post("/", (req, res) => {
    res.send("Hello");
    const newUser = new User();
    console.log(req.body);
    newUser.name = req.body.user.name;
})


module.exports = router;