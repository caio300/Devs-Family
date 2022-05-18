const fs = require('fs').promises;

const readFile = async () => {
  const readTalkers = await fs.readFile('./devs.json', 'utf-8');
  return JSON.parse(readTalkers);
};

module.exports = readFile;
