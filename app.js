const express = require('express');
const app = express();
const database = require('./Database/database.js');
const controller = require('./controller/controller.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

async function criarTabela(){
  return await controller.criarTabela();
}
criarTabela();

app.post("/api/inserirProdutos", (req, res)=>{
  const produto = req.body;
  controller.inserirProdutos(produto);
});

app.listen(3000, ()=>{
  console.log("Servidor rodando com sucesso em http://localhost:3000");
});
