import { Router } from 'express';
import loginRoutes from './login';
import userRoutes from './user';
import configurationsRoutes from './configurations';

const routes = Router();

routes.use('/', loginRoutes);
routes.use('/', userRoutes);
routes.use('/', configurationsRoutes);

export default routes;