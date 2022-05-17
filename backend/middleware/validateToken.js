const validateToke = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ messagem: 'Token não encontrado'});
  }

  if (authorization.length < 16) {
    return res.status(401).json({ messagem: 'Token inválido'});
  }
  next();
};

module.exports = validateToke;
