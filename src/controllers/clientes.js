const ClientesModel = require('../models/clientes')
const { crypto } = require('../utils/senha')

//caso um dia precise mexer na msg de cadastro é só alterar essa constante ao inves de função por função
const defaultTitle = 'Cadastro de Clientes'

function index(req, res) {
    res.render('registro', {
        title: defaultTitle,
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

    res.render('registro', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!'
    })
}

//a lista vai ser um array de usuarios onde vai listar os clientes
async function listUsers(req, res){
    //procurando os usuarios cadastrados da para passar parametros tb como email, senha, etc ClientesModel.find(){ email: '' }
    //o find vazio vai retornar todos
    const users = await ClientesModel.find()

    res.render('listUsers', {
        title: 'Listagem de usuários!',
        users,
    })
}

//exportando as funções para que elas sejam usadas 
module.exports = {
    index,
    add,
    listUsers,
}