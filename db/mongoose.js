const mongoose = require("mongoose");
const path = require("path")

// TODO: understand the next 2 lines
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const mongo_uri = process.env.MONGO_URI

console.log("print: "+ mongo_uri);

mongoose.connect(mongo_uri);

