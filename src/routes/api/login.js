import { Router } from 'express';
import {Config} from '../../config';
import Login from '../../app/controller/Login';

const loginRoutes = Router();

loginRoutes.post(Config.route.LOGIN, (req, res) => {
    let login = new Login({res, req});
    login.makeDBConnection().then(() => {
        login.login();
    });
});

export default loginRoutes;