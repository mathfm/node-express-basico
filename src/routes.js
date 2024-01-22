import { Router } from "express";
import usuarioController from './app/controllers/usuarioController.js';

const routes = Router();
// indica que o express para ler o body no formato de json
routes.get('/users', usuarioController.index);

routes.get('/users/:id', usuarioController.show);

routes.post('/users', usuarioController.store);

routes.put('/users/:id', usuarioController.update);

routes.delete('/users/:id', usuarioController.delete);

export default routes;