const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    id: {
        type: Number
    }
})

module.exports = mongoose.model("User", userSchema)

