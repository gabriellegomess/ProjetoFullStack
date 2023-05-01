const ClientesModel = require('../models/clientes')

function add(req, res) {
    //console.log('Ok funcionou')
    const {
        nome, 
        idade, 
        cpf, 
        telefone, 
        email, 
        senha, 
        endereco,
    } = req.body

    const register = new ClientesModel({
        nome, 
        idade, 
        cpf, 
        telefone, 
        email, 
        senha, 
        endereco,
    })

    register.save()

    res.send('Cadastro realizado!')
}

module.exports = {
    add
}