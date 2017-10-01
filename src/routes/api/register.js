import { Router } from 'express';
import {Config} from '../../config';
import Register from '../../app/controller/Register';

const registerRoutes = Router();

registerRoutes.post(Config.route.REGISTER, (req, res) => {
    let register = new Register({res, req});
    register.makeDBConnection().then(() => {
        register.register();
    });
});

export default registerRoutes;