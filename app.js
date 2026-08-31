const express = require('express');
const app = express();
const database = require('./Database/database.js');
const controller = require('./controller/controller.js');



async function criarTabela(){
  return await controller.criarTabela();
}
criarTabela();
controller.inserirProdutos("teste");

app.listen(3000, ()=>{
  console.log("Servidor rodando com sucesso!");
});
