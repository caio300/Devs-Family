const validateArea = (req, res, next) => {
  const { area } = req.body;
  if (!area) {
    return res.status(400).json({ message: 'O campo "area" é obrigatório' });
  }
  
  next();
};

module.exports = validateArea;