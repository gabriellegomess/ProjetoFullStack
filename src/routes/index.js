const router = require('express').Router() //importando o metodo router do express para rodar a aplicação

//rotas da aplicação Este trecho de código implementa uma rota HTTP que define o comportamento do servidor quando ele recebe uma requisição GET na raiz da URL
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

//exportando o router
module.exports = router