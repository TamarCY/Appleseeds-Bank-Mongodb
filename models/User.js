const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    id: Number,
    credit: Number,
    cash: Number,
    isActive: Boolean
})

module.exports = mongoose.model("User", userSchema)
