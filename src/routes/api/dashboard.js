import { Router } from 'express';
import {Config} from '../../config';

const dashboardRoutes = Router();

dashboardRoutes.get(Config.route.DASHBOARD, (req, res) => {
    res.send('Dashboard');
});

export default dashboardRoutes;