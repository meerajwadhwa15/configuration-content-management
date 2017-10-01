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
    let auth = new Auth(),
    token = req.headers.token;
    if (Config.UNAUTH_ROUTES.indexOf(req.url) != -1) {
        next();
    } else {
        // validate JWT Token
        auth.verifyJWTToken(token).then((res) => {
            next();
        }, (err) => {
            auth.errorResonse('UnAuthorized Access. Please login again.', 400);
        });
    }
});

App.use(Config.route.API_PATH, routes);
App.use('/static', express.static(__dirname + '/assets'));

// 404 Page
App.use((req, res) => {
    //res.send('Not Found');
});

export default App;


