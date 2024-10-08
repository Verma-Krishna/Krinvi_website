const mongoose = require("mongoose")

const registerschema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("register",registerschema)