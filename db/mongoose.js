const mongoose = require("mongoose");
// require("dotenv").config();
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect(process.env.MONGO_URI);


