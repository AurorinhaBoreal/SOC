import express from "express";
import db from "../services/teacherService.js"
const routes = express.Router()

routes.post('/', async (request, response) => {
    const {name, colorCard} = request.body;

    const user = await db.createTeacher(name, colorCard);

})

export default routes;