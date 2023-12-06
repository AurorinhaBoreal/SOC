import database from '../repository/connectmysql.js';

async function createTeacher(name, colorCard){
  const sql = `insert into tb_prof (nome, corCard) 
               values(?,?)`;

  const dataProf = [name, colorCard];

  const conn = await database.connect();
  await conn.query(sql, dataProf);
  conn.end();
}

export default {createTeacher};