const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');
const {
  validID,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

route.get('/all-paletas', controllerPaletas.findAllPaletasController);
route.get(
  '/find-paleta/:id',
  validID,
  controllerPaletas.findPaletaByIdController,
);
route.post(
  '/create-paleta',
  validObjectBody,
  controllerPaletas.createPaletaController,
);
route.put(
  '/update-paleta/:id',
  validID,
  validObjectBody,
  controllerPaletas.updatePaletaController,
);
route.delete(
  '/delete-paleta/:id',
  validID,
  controllerPaletas.deletePaletaController,
);

module.exports = route;
