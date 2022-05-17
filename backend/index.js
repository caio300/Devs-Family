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
const addNewDev = require('./middleware/addNewDev');
const editDev = require('./middleware/editDev');
const deleteDev = require('./middleware/deleteDev');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.get('/devs', getAllDevs);
app.get('/login', validateEmail, validatePassword, token);
app.post('/devs', validateToke, validateName, validateAge, validateArea, validateImage, validateLinkedin, validateGithub, addNewDev);
app.put('/devs/:id', validateToke, validateName, validateAge, validateArea, validateImage, validateLinkedin, validateGithub, editDev);
app.delete('/devs:id', validateToke, deleteDev)

app.listen(PORT, () => {
  console.log('Online');
});