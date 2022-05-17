const fs = require('fs').promises;
const readFile = require('../readFile');

const editDev = async (req, res) => {
  const { id } = req.params;
  const { name, age, area, img, linkedin, github } = req.body;
  const devs = await readFile();
  const dev = devs.find((elem) => elem.id === Number(id));
  dev.name = name;
  dev.age = age;
  dev.area = area;
  dev.img = img;
  dev.linkedin = linkedin;
  dev.github = github;
  fs.writeFile('../devs.json', JSON.parse(devs));
  res.status(200).json(dev);
}

module.exports = editDev;