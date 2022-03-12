const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;


//para ver o user cadastrado, deve estar logado e é obrigatório o token do próprio user(pode ver apenas o próprio user)
//todos podem ver os games cadastrados, porém para cadastrar deve estar logado e colocar o token
//para adicionar tempo gasto jogando, precisa estar logado na sua conta 
const rules = auth.rewriter({
  users: 644,
  games: 644,
  timeSpent: 644
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);