## Endpoints

São 3 endpoints:

    * /users
    * /games
    * /timeSpent

### Cadastro de novo usuário

POST /register <br/>
POST /signup <br/>
POST /users

Qualquer um desses 3 endpoints irá cadastrar o usuário na lista de "Users", sendo que os campos obrigatórios são os de email e password. Porém será de grande importância adicionar os campos "name" e "age" (não obrigatório).

### Login

POST /login <br/>
POST /signin

Qualquer um desses 2 endpoints pode ser usado para realizar login com um dos usuários cadastrados na lista de "Users".

### Cadastro de jogos

POST /games

Você poderá cadastrar jogos relacionados ao seu perfil. Para adicionar o jogo, será necessário estar logado na sua conta e adicionar o token de login na autenticação. Os campos necessários para cadastrar um jogo são: "name" e "userId" - userId é usado como referência para qual usuário o jogo será cadastrado (obrigatório).

### Visualização de jogos cadastrados

GET /games

Qualquer usuário pode ver os jogos cadastrados usando a rota /games. 

### Cadastrar tempo total jogado

POST /timeSpent

Você poderá cadastrar o tempo total jogado ao seu perfil. Para adicionar, será necessário estar logado na sua conta e adicionar o token de login na autenticação. Os campos necessários para cadastrar são: "totalTime" e "userId" - userId é usado como referência para qual usuário o tempo total de jogo será cadastrado (obrigatório).

### Visualização de tempo total de jogo

GET /timeSpent

Qualquer usuário pode ver o tempo total de jogo cadastrado usando a rota /timeSpent.