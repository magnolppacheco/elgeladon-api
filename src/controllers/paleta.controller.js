const mongoose = require('mongoose');
const paletasService = require('../services/paleta.service');

const findAllPaletasController = async (req, res) => {
  const paletas = await paletasService.findAllPaletasService();

  if(paletas.length == 0){
    return res.status(404).send({message:'No paletas found!'});
  }
  res.send(paletas);
};

const findPaletaByIdController = async (req, res) => {
  const idParam = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(idParam)){
    return res
    .status(400)
    .send({message: 'Invalid ID!' });
  }

  const PaletaChosen = await paletasService.findPaletaByIdService(idParam);

  if(!PaletaChosen){
    return res
    .status(404)
    .send({message: 'Paleta has not been found!' });
  }
  
  res.send(PaletaChosen);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.taste ||
    !paleta.description ||
    !paleta.image ||
    !paleta.price
  ) {
    return res
      .status(400)
      .send({ message: 'Submit all paleta fields!' });
  }

  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(idParam)){
    return res
    .status(400)
    .send({message: 'Invalid ID!' });}

  const paletaEdit = req.body;

  if (
    !paletaEdit ||
    !paletaEdit.taste ||
    !paletaEdit.description ||
    !paletaEdit.image ||
    !paletaEdit.price
  ) {
    return res
      .status(400)
      .send({ message: 'Submit all paleta fields!' });
  }

  const updatedPaleta = await paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(idParam)){
    return res
    .status(400)
    .send({message: 'Invalid ID!' });}

  await paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta has been deleted!' });
};

module.exports = {
  findAllPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
