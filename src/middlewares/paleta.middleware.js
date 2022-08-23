const mongoose = require('mongoose');

const validID = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Invalid ID!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.taste ||
    !paleta.description ||
    !paleta.image ||
    !paleta.price
  ) {
    return res.status(400).send({ message: 'Submit all paleta fields!' });
  }
  next();
};

module.exports = {
  validID,
  validObjectBody,
};
