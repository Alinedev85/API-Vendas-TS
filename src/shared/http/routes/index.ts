import { Router } from "express";

const routes = Router();

routes.get('/', (request, response ) => {
  return response.json({message: 'rota principal funcionando' });
});

export default routes;
