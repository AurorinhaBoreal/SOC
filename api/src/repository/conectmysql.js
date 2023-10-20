import mysql2 from 'mysql2/promise';

async function connect(){
  return await mysql2.createConnection({
    host:'localhost',
    post:3434,
    password:'',
    database:'SOC_DB',
    user:'root',
  })
}

export default {connect};
