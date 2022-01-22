const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    id: {
        type:Number
    },
    credit: {
        type:Number
    },
    cash: {
        type:Number
    },
    isActive: {
        type: Boolean
    }
})

module.exports = mongoose.model("User", userSchema)

