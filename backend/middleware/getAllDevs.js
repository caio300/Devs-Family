const fs = require('fs');

const getAllDevs = async (_req, res) => {
  const devs = await JSON.parse(fs.readFileSync('devs.json'));

  if (!devs) {
    res.status(200).json([]);
  }

  res.status(200).json(devs);
};

module.exports = getAllDevs;