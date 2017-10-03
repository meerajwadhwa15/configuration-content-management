import { Router } from 'express';
import {Config} from '../../config';
import Register from '../../app/controller/Register';

const userRoutes = Router();

userRoutes.post(Config.route.REGISTER, (req, res) => {
    let register = new Register({res, req});
    register.makeDBConnection().then(() => {
        register.register();
    });
});

userRoutes.put(Config.route.REGISTER, (req, res) => {
    let register = new Register({res, req});
    register.makeDBConnection().then(() => {
        register.update();
    });
});

userRoutes.get(Config.route.REGISTER, (req, res) => {
    let register = new Register({res, req});
    register.makeDBConnection().then(() => {
        register.get();
    });
});

userRoutes.delete(Config.route.REGISTER, (req, res) => {
    let register = new Register({res, req});
    register.makeDBConnection().then(() => {
        register.delete();
    });
});

export default userRoutes;