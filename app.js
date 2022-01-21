const express = require('express');
const User = require("./models/User")
require("./db/mongoose");


//
const cors = require('cors');
const path = require('path');
//

const app = express();

const port = process.env.PORT || 5000;

//
const publicPath = path.join(__dirname, 'client/build');
app.use(cors());
app.use(express.static(publicPath));
//

app.use(express.json());

app.get('/api/users', (req, res) => {
  try {
    res.status(200).send({ userName: 'Bob' });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});


const user = new User({ id: 1, credit: 100, cash: 200, isActive: true})



const run = async () =>{
    await user.save(),
    console.log("user saved");
}

run()

//
app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});
//

app.listen(port, () => {
  console.log('listening on port ' + port);
});
