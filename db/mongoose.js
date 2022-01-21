const mongoose = require("mongoose");
const User = require("../models/User");

// TODO: understand the next 2 lines
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect(process.env.MONGO_URI);


// Create basic user to chack the connections:

const user = new User({ id: 1, credit: 100, cash: 200, isActive: true})

user.save().then(()=> console.log("test user saved"))