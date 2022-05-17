const validateGithub = (req, res, next) => {
  const { github } = req.body;
  if (!github) {
    return res.status(400).json({ message: 'O campo "github" é obrigatório' });
  }
  
  next();
};

module.exports = validateGithub;