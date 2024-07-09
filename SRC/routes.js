import { Router } from 'express';


import UserController from './SRC/controllers/UserController';
import TaskController from './SRC/controllers/TaskController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});


routes.put('/users', UserController.update);

routes.post('/tarefa', TaskController.store);
routes.get('/tarefa', TaskController.index);
routes.put('/tarefa/:tarefa_id', TaskController.update);
routes.delete('/tarefas/:tarefa_id', TaskController.destroy);