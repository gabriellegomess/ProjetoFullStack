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
19- Conectado ao banco de dados ()
