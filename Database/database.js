const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'listaDeCoisas'
});


  connection.connect((erro)=>{
    if(erro){
      console.log("Erro ao conectar ao banco.");
      return erro;
    }
    console.log("Coneção realizada com sucesso.")
    return 0;
  });

const database = connection.promise();
module.exports = database;
