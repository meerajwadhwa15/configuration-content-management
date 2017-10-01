import { Router } from 'express';
import {Config} from '../../config';
import Register from '../../app/controller/Register';

const registerRoutes = Router();

registerRoutes.post(Config.route.REGISTER, (req, res) => {
    let register = new Register({res, req});
    register.makeDBConnection().then(() => {
        console.log('Connected to DB Successfully.');
        register.register();
    }, () => {
        console.log('DB Connection fail.');
    });
});

export default registerRoutes;