const ClientesModel = require('../models/clientes')
const { crypto } = require('../utils/senha')

function index(req, res) {
    res.render('registro', {
        title: 'Cadastro de Clientes'
    })
}

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

//a lista vai ser um array de usuarios onde vai listar os clientes
function listUsers(req, res){
    res.render('listUsers', {
        title: 'Listagem de usuários!',
        users: []
    })
}

//exportando as funções para que elas sejam usadas 
module.exports = {
    index,
    add,
    listUsers,
}