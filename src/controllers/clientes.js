const ClientesModel = require('../models/clientes')
const { crypto } = require('../utils/senha')

async function add(req, res) {
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

//atribuindo a criptografia da senha antes de ser passada para o banco de dados
    const senhaCrypto = await crypto(senha)

    const register = new ClientesModel({
        nome, 
        idade, 
        cpf, 
        telefone, 
        email, 
        senha: senhaCrypto, 
        endereco,
    })

    register.save()

    res.send('Cadastro realizado!')
}

module.exports = {
    add
}