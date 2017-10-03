import express from 'express';
import routes from '../routes/api/';
import logger from 'morgan';
import { Config } from '../config';
import Auth from './controller/Auth';
import bodyParser from 'body-parser';


const App = express();

App.use(Config.route.API_PATH, bodyParser.json());
App.use(Config.route.API_PATH, bodyParser.urlencoded({ extended: true }));
App.use(Config.route.API_PATH, (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, token, body, Content-Type");
    let auth = new Auth({ req, res });
    if (Config.UNAUTH_ROUTES.indexOf(req.url) != -1) {
        next();
    } else {
        // validate JWT Token
        let token = req.headers.token;
        auth.verifyJWTToken(token).then((response) => {
            if (Config.ADMIN_ROUTES.indexOf(req.url) != -1 && response.data && response.data.length && response.data[0].role.toLowerCase() !== 'admin') {
                auth.errorResonse(Config.PERMISSION_DENIED, 400);
            } else {
                next();
            }
        }, (err) => {
            auth.errorResonse(Config.UNAUTHORIZED_ACCESS, 400);
        });
    }
});

App.use(Config.route.API_PATH, routes);
App.use('/static', express.static(__dirname + '/assets'));

// 404 Page
App.use((req, res) => {
    res.send({ error: Config.NOT_FOUND });
});

export default App;


