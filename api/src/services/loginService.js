import database from '../repository/connectmysql.js';

async function handleLogin(cod_etec, login, password) {
    const sql = 'select * from tb_user where cod_etec = ? and login = ? and senha = ?;'

    const dataLogin = [cod_etec, login, password];

    const conn = await database.connect();
    const [rows] = await conn.query(sql, dataLogin);

    console.log("INFORMAÇÕES >>>>>>>>>>>>", rows)
    conn.end();
    return rows;
}

export default {handleLogin};