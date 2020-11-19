import { Router } from 'express';

const routes = Router();

/* DONT NEED USE TRYCATCH */
routes.use('/users', async (request, response) => {
  return response.json({ GET: 'Routes is ok!' });
});

export default routes;
