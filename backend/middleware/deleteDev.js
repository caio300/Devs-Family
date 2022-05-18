const fs = require('fs').promises;
const readFile = require('../readFile');

const deleteDev = async (req, res) => {
  const { id } = req.params;
  const devs = await readFile();
  const devFilter = devs.filter((elem) => elem.id !== Number(id));
  fs.writeFile('devs.json', JSON.stringify(devFilter));
  res.status(200).json({ message: 'Dev deletado com sucesso !'})
};

module.exports = deleteDev;