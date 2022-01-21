import axios from 'axios';

let myUrl = 'http://localhost:5000/api/'; //development

if (process.env.NODE_ENV === 'production') {
  myUrl = 'https://bank-mongodb.herokuapp.com/api';
}
export default axios.create({
  baseURL: myUrl,
});
