const express = require('express');
const bodyParser = require('body-parser');
const getAllDevs = require('./middleware/getAllDevs');
const validateEmail = require('./middleware/validateEmail');
const validatePassword = require('./middleware/validatePassword');
const token = require('./middleware/token');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.get('/devs', getAllDevs);
app.get('/login', validateEmail, validatePassword, token);

app.listen(PORT, () => {
  console.log('Online');
});