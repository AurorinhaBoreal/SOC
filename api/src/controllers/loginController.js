import express from "express";
import db from "../services/loginService.js"
const routes = express.Router()

routes.post('/', async (request, response) => {
    const {cod_etec, login, password} = request.body;

    const user = await db.handleLogin(cod_etec, login, password);

    if (user.length < 1) {
        response.status(401).send({message: "Login Incorreto! Verifique os dados novamente!"})
    } else {
        response.status(200).send({message: "Login realizado com sucesso!"})
    }
})

export default routes;