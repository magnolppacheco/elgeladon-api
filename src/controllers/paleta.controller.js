const paletasService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();

  if(paletas == 0){
    return res.status(404).send({message:'No paletas found!'});
  }
  res.send(paletas);
};

const findPaletaByIdController = (req, res) => {
  const idParam = Number(req.params.id);

  if(!idParam){
    return res
    .status(400)
    .send({message: 'Invalid ID!' });
  }

  const PaletaChosen = paletasService.findPaletaByIdService(ParamID);

  if(!PaletaChosen){
    return res
    .status(404)
    .send({message: 'Paleta has not been found!' });
  }
  
  res.send(PaletaChosen);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;

  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Submit all paleta fields!' });
  }

  const newPaleta = paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if(!idParam){
    return res
    .status(400)
    .send({message: 'Invalid ID!' });
  }

  const paletaEdit = req.body;

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Submit all paleta fields!' });
  }

  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if(!idParam){
    return res
    .status(400)
    .send({message: 'Invalid ID!' });
  }

  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta has been deleted!' });
};

module.exports = {
  findAllPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
