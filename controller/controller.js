const database = require("../Database/database.js");

async function criarTabela () {
  const resultado = await database.query(`CREATE TABLE IF NOT EXISTS produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL UNIQUE
  );`)
  if(!resultado){
    console.log(`Erro ao criar tabela produtos. :-(`);
  } else {
    console.log(`Tabela produtos criada com sucesso!`)
  }
}
async function inserirProdutos (produto) {
  try {
    await database.query(`INSERT INTO produto (nome) VALUES (?);`, [produto]);
  } catch (erro) {
      console.log(`Erro ao inserir produto na tabela: ${erro}`);
    }
}


module.exports = {
  criarTabela,
  inserirProdutos
}