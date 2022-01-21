const mongoose = require("mongoose");
const User = require("../models/User");

// TODO: understand the next 2 lines
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect(process.env.MONGO_URI);



