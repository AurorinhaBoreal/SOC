import express from 'express';
import db from '../services/userService.js';

const routes = express.Router();

routes.post('/', async(request, response) => {
  try{
  const {email, codEtec, login, password} = request.body;
  if(password.length < 10) {
    return response.status(400).send({message: 'A senha não pode ter menos de 10 caracteres!'});
  } 

  await db.createUser(email, codEtec, login, password);

  return response.status(201).send({message: 'Usuário criado com sucesso!!'})
  }
  catch(err){
    return response.status(500).send({message: `Erro no Servidor ${err}`});
  }
});

export default routes;