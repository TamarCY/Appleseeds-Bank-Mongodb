const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    id: Number,
    credit: Number,
    cash: Number,
    isActive: Boolean,
    partner: mongoose.SchemaTypes.ObjectId,
    additionalData:[String]
})

module.exports = mongoose.model("User", userSchema)

