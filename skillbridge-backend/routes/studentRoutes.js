const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");

const router = express.Router();

const User = require("../models/User");
// REGISTER USER
router.post("/register", async (req, res) => {


console.log("========== REGISTER REQUEST ==========");
console.log(req.body);

try {

    const existingUser = await User.findOne({
        email: req.body.email
    });

    if (existingUser) {

        console.log("User already exists");

        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        10
    );

    const newUser = new User({

        ...req.body,

        password: hashedPassword

    });

    const savedUser = await newUser.save();

    console.log("User Registered Successfully");
    console.log(savedUser);

    res.status(201).json(savedUser);

} catch (error) {

    console.log("REGISTER ERROR:");
    console.log(error);

    res.status(400).json({
        message: error.message
    });
}


});


// LOGIN USER
router.post("/login", async (req, res) => {


try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

        return res.status(400).json({
            message: "User not found"
        });
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {

        return res.status(400).json({
            message: "Invalid Password"
        });
    }

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    res.json({
        token,
        user
    });

} catch (error) {

    res.status(500).json({
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


// FIND MATCHES BY SKILL
router.get("/matches/:skill", async (req, res) => {

    try {

        const users = await User.find({
            skillOffered: {
                $regex: req.params.skill,
                $options: "i"
            }
        });

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;