import database from '../repository/connectmysql.js';

async function createTeacher(name, colorCard){
  const sql = `insert into tb_prof (nome, corCard) 
               values(?,?)`;

  const dataProf = [name, colorCard];

  const conn = await database.connect();
  await conn.query(sql, dataProf);
  conn.end();
}

async function getTeacher() {

  const sql = `select
  nome as Nome, corCard as corCard
  from tb_prof`

  const conn = await database.connect();
  const [rows] = await conn.query(sql);
  conn.end();
  return rows;
}

export default {createTeacher, getTeacher};