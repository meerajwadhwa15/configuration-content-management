import { Router } from 'express';
import loginRoutes from './login';
import registerRoutes from './register';
import configurationsRoutes from './configurations';

const routes = Router();

routes.use('/', loginRoutes);
routes.use('/', registerRoutes);
routes.use('/', configurationsRoutes);

export default routes;