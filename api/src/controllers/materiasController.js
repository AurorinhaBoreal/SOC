import express from "express";
import db from "../services/materiasService.js"
const routes = express.Router()

routes.get('/', async (request, response) => {
    try {
        const materias = await db.getMaterias();

        if(materias.length > 0){
            return response.status(200).send({message: materias})
        }
        else{
            return response.status(204).end();
        }

    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

export default routes;