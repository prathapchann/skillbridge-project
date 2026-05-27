const express = require("express");

const router = express.Router();

const User = require("../models/User");


// REGISTER & SAVE PROFILE
router.post("/register", async (req, res) => {

    try {

        console.log(req.body);

        const newUser = new User(req.body);

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);

    } catch (error) {

        console.log(error);

        res.status(400).json({
            message: error.message
        });
    }
});


// GET ALL USERS
router.get("/", async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;