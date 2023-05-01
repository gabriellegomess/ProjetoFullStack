//nome de server para identificar mais facilmente quem iria iniciar o projeto/servidor

//importando o express e o path e inicializando o express
const express = require('express')
const path = require('path')

//iniciando o express
const app = express()


//definindo o template engine
app.set('view engine', 'ejs')
//especificando o local correto da pasta view (o path vai especificar a biblioteca/pasta/etc q vai estar, 'views') //o dirname ja esta na pasta src
app.set('views', path.join(__dirname, 'views'))


//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))


//habilitar o server para receber dados via post (do formulário)
app.use(express.urlencoded({ extended: true}))


//rotas da aplicação
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

//erro 404 (not found)
app.use((req, res) => { //middleware
    res.send('Página não encontrada!')
})

//executando o servidor (o listen vem ao final de tudp)
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`));