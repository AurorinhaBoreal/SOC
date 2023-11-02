import express from 'express';
import userController from './controllers/userController.js';
import loginController from './controllers/loginController.js'

const routes = express();

routes.use('/cadastro', userController);
routes.use('/login', loginController);


export default routes;