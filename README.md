# ProjetoFullStack
 
1- instalação do package.json (npm init -y)
2- Instalação do nodemon (npm install nodemon --save-dev)
3- Instalação do express e do mongoose (npm install express mongoose) (a no package json dentro do scripts adiciona:  "dev": "nodemon src/server.js", ) pois o nodemon só roda em ambiente de dev e o start vai iniciar a aplicação de um servidor online
4- Criação da pasta gitignore para o node_modules (é uma prática ruim não ignorar esta pasta)
5- Criação da pasta SRC e deixar apenas os arquivos de configurações do projeto fora da pasta e dentro da pasta src ficara toda a estrutura do projeto, os views, models, controllers, e etc, tudo que precisar 
6- Criação de server.js dentro da pasta SRC (nome de server para identificar mais facilmente quem iria iniciar o projeto/servidor)
7- Na pasta server montando as configurações de rota, de inicio, e de erro também, e escolhendo a porta em que o servidor vai rodar
8- Criação da pasta views, e do arquivo index.ejs (vai fazer ser possivel a criação de arquivo html dentro dele)
9- Criação da pasta public, arquivos q vao ficar publicos, criando o CSS, e o main.js (separei em pastas para facilitar e não misturar as duas coisas)
10- Na pasta de css (depois de linkar o main e o css no arquivo html) definindo a cor do body e na pasta main um alerta de ok para ter certeza de que deu td certo

//esse ejs permite rodar em html e vai ter todas as coisas que o html possui e indica que o arquivo é um template escrito em EJS (Embedded JavaScript) (que permite a inserção de JavaScript em HTML).
11- Testei se estava rodando e deu o erro de q o EJS estava faltando ent (npm i ejs) e ai continuou rodando porem cm erro (e estava localhost:8080)

12- Defini o local correto da pasta views app.set('views', path.join(__dirname, 'views')) (erro resolvido)
13- AEEE FUNCIONOU (ta com o background preto do css e sem erro - commit base 3)
14- Criação da pasta partials e do arquivo head.ejs 
15- Removi o head e o script do index e coloquei no head e importei o head.ejs 

16- BASE-4

17- Estabelecendo a conexão com o banco de dados e dando um console para ter crtz de que esta conectado
18- CASO DE ERRO COM O MONGO PARA CONECTAR ENTRAR NO "services" PROCURAR PELO MONGODB 
19- Conectado ao banco de dados (base-6)
20- Criando as rotas de cliente, e as condições q a rota vai receber fazendo os post e os get tambem da rota (base-7)
21- Baixando npm install bcrypt para criptograafar a senha do cidadao
22- Criptografando a senha
23- 


# Explicação dos termos

# path e Dirname

O __dirname é uma constante global do Node.js que representa o caminho absoluto do diretório atual do arquivo. É útil para quando se deseja especificar o caminho para um arquivo em relação ao diretório atual.

O path.join() é um método do módulo Node.js path que retorna o caminho concatenado de vários argumentos, independentemente do sistema operacional. No caso do exemplo, é utilizado para unir o diretório atual com a pasta 'public', criando assim um caminho absoluto para a pasta de arquivos estáticos.

O código app.use(express.static(path.join(__dirname, 'public'))) é utilizado para servir arquivos estáticos, como imagens, arquivos CSS e JavaScript, etc. A partir desse momento, o Express irá automaticamente servir qualquer arquivo na pasta 'public' quando uma solicitação for feita para o servidor com o nome do arquivo no caminho da URL.

# Middleware

Middleware é um termo utilizado em desenvolvimento de software para referir-se a uma camada intermediária entre diferentes componentes de uma aplicação. Em outras palavras, é uma função que recebe uma requisição HTTP, realiza alguma operação (como validar dados, autenticar um usuário, entre outras), e passa a requisição para a próxima função ou camada de middleware, ou para a rota correspondente.

No contexto do Express, um middleware é uma função que tem acesso aos objetos request (req), response (res) e next e é executada em sequência com outras funções antes de chegar na rota final. É possível adicionar middleware em uma aplicação do Express através do método app.use(). Isso permite adicionar funcionalidades extras a uma aplicação, tais como autenticação, validação de dados, logging, entre outras.

# Async

O uso da palavra-chave "async" permite que a função seja executada de forma assíncrona, o que significa que outras tarefas podem ser executadas enquanto a tarefa assíncrona está sendo processada. Isso é especialmente útil em operações de I/O, como a leitura e escrita de arquivos, ou em operações de rede, como requisições HTTP, que podem ser lentas e bloquear a execução do código.

