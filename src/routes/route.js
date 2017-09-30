import { Router } from 'express';
const routes = Router();

routes.get('/', (req, res) => {
    res.send('Dashboard');
});

routes.get('/login', (req, res) => {
    res.send('Login');
});

export default routes;