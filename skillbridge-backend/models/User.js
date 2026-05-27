const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    skillOffered: {
        type: String,
        required: true
    },

    skillWanted: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    bio: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("User", userSchema);