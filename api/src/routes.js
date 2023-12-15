import express from 'express';
import userController from './controllers/userController.js';
import loginController from './controllers/loginController.js';
import teacherController from './controllers/teacherController.js';
import materiasController from './controllers/materiasController.js';

const routes = express();

routes.use('/cadastro', userController);
routes.use('/login', loginController);
routes.use('/prof', teacherController);
routes.use('/materias', materiasController);

export default routes;