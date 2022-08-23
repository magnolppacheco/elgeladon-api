const paletasService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();
  res.send(paletas);
};

const findPaletaByIdController = (req, res) => {
  const ParamID = Number(req.params.id);
  const PaletaChosen = paletasService.findPaletaByIdService(ParamID);
  res.send(PaletaChosen);
};

module.exports = {
  findAllPaletasController,
  findPaletaByIdController,
};
