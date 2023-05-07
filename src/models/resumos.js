const mongoose = require('mongoose');

const ClientesController = require('../controllers/clientes')
const ProdutosController = require('../controllers/produtos')
const ClientesModel = require('../models/clientes')
const ProdutosModel = require('../models/produtos')
const ResumosModel = require('../models/resumos')
const IndexController = require('../controllers/index')

const resumoSchema = new mongoose.Schema({
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cliente',
      required: true
    },
    produtos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Produto',
      required: true
    }]
  });



const Resumo = mongoose.model('Resumo', resumoSchema);

module.exports = Resumo; 