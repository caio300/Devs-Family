const validateImage = (req, res, next) => {
  const { img } = req.body;
  if (!img) {
    return res.status(400).json({ message: 'O campo "imagem" é obrigatório' });
  }
  
  next();
};

module.exports = validateImage;