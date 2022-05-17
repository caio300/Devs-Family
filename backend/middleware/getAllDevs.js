const fs = require('fs');

const getAllDevs = async (_req, res) => {
  const talkers = await JSON.parse(fs.readFileSync('devs.json'));

  if (!talkers) {
    res.status(200).json([]);
  }

  res.status(200).json(talkers);
};

module.exports = getAllDevs;