const router = require('express').Router() //importando o metodo router do express para rodar a aplicação


const ClientesController = require('../controllers/clientes')
const ProdutosController = require('../controllers/produtos')
const ClientesModel = require('../models/clientes')
const ProdutosModel = require('../models/produtos')
const ResumosModel = require('../models/resumos')
const IndexController = require('../controllers/index')
//rotas da aplicação Este trecho de código implementa uma rota HTTP que define o comportamento do servidor quando ele recebe uma requisição GET na raiz da URL


//"pagina inicial"
router.get('/', IndexController.index)
router.get('/', function(req, res) {
    res.render('index');
  });

//===========CLIENTE============

//registro (esse vai retornar a msg de que o cadastro foi realizado)
router.get('/registro', ClientesController.index)

//quando cair na rota de adc um nv cliente ele vai chamar a função de adiconar la do controller
router.post('/registro/add', ClientesController.add)


//rota para listar os usuarios
router.get('/list', ClientesController.listUsers)


//editar os clientes
router.get('/edit', ClientesController.indexEdit) //renderizar a pagina
router.post('/edit/:id', ClientesController.edit) //editar o usuario de fato baseado no parametro q esta recebendo

//excluidar usuario
router.post('/remove/:id', ClientesController.excluir)


//===========PRODUTO============

router.get('/registroProdutos', ProdutosController.index)

router.post('/registroProdutos/add', ProdutosController.add)

router.get('/listProdutos', ProdutosController.listProdutos)

router.get('/editProdutos', ProdutosController.indexEdit)
router.post('/editProdutos/:id', ProdutosController.edit)

router.post('/removeProdutos/:id', ProdutosController.excluir)

//===========VENDA============

router.get('/formulario', async function(req, res) {
    try {
      const clientes = await ClientesModel.find();
      const produtos = await ProdutosModel.find();
  
      res.render('formulario', {
        title: 'Formulário',
        clientes: clientes,
        produtos: produtos,
        resultado: null,
      });
    } catch (error) {
      // Trate o erro de consulta ao banco de dados aqui
      res.status(500).send('Erro ao carregar o formulário');
    }
  });

  router.post('/formulario/add', async function(req, res) {
    try {
      const { cliente, produtos } = req.body;
  
      // Criar um novo documento de resumo
      const resumo = new ResumosModel({
        cliente: cliente,
        produtos: produtos
      });
  
      // Salvar o resumo no banco de dados
      await resumo.save();
  
      // Redirecionar para a página inicial (index)
      res.redirect('/');
    } catch (error) {
      // Tratar erros de validação ou de salvamento no banco de dados
      res.render('error', {
        message: 'Erro ao enviar o formulário. Por favor, tente novamente.'
      });
    }
  });
  
//===========RESUMO DA VENDA============
router.get('/resumos', ResumosController.listResumos);


//exportando o router
module.exports = router