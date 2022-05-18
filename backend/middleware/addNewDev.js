const fs = require('fs').promises;
const readFile = require('../readFile');

const addNewDev = async (req, res) => {
  const { name, age, area, img, linkedin, github } = req.body;
  const devs = await readFile();
  const newDev = {
    name,
    age,
    id: devs.length + 1,
    area,
    img,
    linkedin,
    github
  };
  devs.push(newDev);
  fs.writeFile('devs.json', JSON.stringify(devs));
  res.status(201).json(newDev);
};

module.exports = addNewDev;
