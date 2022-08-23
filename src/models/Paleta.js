const mongoose = require('mongoose');

const PaletaSchema = new mongoose.Schema({
    taste: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }

});

const Paleta = mongoose.model('paletas', PaletaSchema)

module.exports = Paleta;
