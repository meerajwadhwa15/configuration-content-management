import { Router } from 'express';
import loginRoutes from './login';
import registerRoutes from './register';
import dashboardRoutes from './dashboard';

const routes = Router();

routes.use('/', loginRoutes);
routes.use('/', registerRoutes);
routes.use('/', dashboardRoutes);

export default routes;