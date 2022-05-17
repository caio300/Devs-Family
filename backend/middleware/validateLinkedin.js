const validateLinkedin = (req, res, next) => {
  const { linkedin } = req.body;
  if (!linkedin) {
    return res.status(400).json({ message: 'O campo "linkedin" é obrigatório' });
  }
  
  next();
};

module.exports = validateLinkedin;