const express = require('express');
const User = require("./models/User")
require("./db/mongoose");
require("./controllers/usersControllers.js")
const usersRouter = require("./routers/usersRoutes.js")


//
const cors = require('cors');
const path = require('path');
// const { getUsers } = require('./controllers/usersControllers.js');
//

const app = express();

const port = process.env.PORT || 5000;

//
const publicPath = path.join(__dirname, 'client/build');
app.use(cors());
app.use(express.static(publicPath));
//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", usersRouter)











//
app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});
//

app.listen(port, () => {
  console.log('listening on port ' + port);
});
