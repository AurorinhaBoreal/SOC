import database from '../repository/conectmysql.js';

async function createUser(email, codEtec, login, password){
  const sql = `insert into tb_user (email, cod_etec, login, senha) 
               values(?,?,?,?)`;

  const dataUser = [email, codEtec, login, password];

  const conn = await database.connect();
  await conn.query(sql, dataUser);
  conn.end();
}

export default {createUser};