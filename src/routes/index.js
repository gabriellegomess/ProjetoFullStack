const router = require('express').Router() //importando o metodo router do express para rodar a aplicação

const ClientesController = require('../controllers/clientes')
//rotas da aplicação Este trecho de código implementa uma rota HTTP que define o comportamento do servidor quando ele recebe uma requisição GET na raiz da URL
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.get('/registro', (req, res) => {
    res.render('registro', {
        title: 'Cadastro de Clientes'
    })
})

//quando cair na rota de adc um nv cliente ele vai chamar a função de adiconar la do controller
router.post('/registro/add', ClientesController.add)

//exportando o router
module.exports = router