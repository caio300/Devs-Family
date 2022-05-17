const express = require('express');
const bodyParser = require('body-parser');
const getAllDevs = require('./middleware/getAllDevs');
const validateEmail = require('./middleware/validateEmail');
const validatePassword = require('./middleware/validatePassword');
const token = require('./middleware/token');
const validateToke = require('./middleware/validateToken');
const validateName = require('./middleware/validateName');
const validateAge = require('./middleware/validateAge');
const validateArea = require('./middleware/validateArea');
const validateImage = require('./middleware/validateImage');
const validateLinkedin = require('./middleware/validateLinkedin');
const validateGithub = require('./middleware/validateGithub');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.get('/devs', getAllDevs);
app.get('/login', validateEmail, validatePassword, token);
app.post('/devs', validateToke, validateName, validateAge, validateArea, validateImage, validateLinkedin, validateGithub)

app.listen(PORT, () => {
  console.log('Online');
});