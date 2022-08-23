const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

route.get('/all-paletas', controllerPaletas.findAllPaletasController);
route.get('/paleta/:id', controllerPaletas.findPaletaByIdController);

module.exports = route;
