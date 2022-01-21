const mongoose = require("mongoose");
const path = require("path")

// TODO: understand the next 2 lines
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect(process.env.MONGO_URI);

