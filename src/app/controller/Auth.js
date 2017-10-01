import Main from './Main';
import jwt from 'jsonwebtoken';
import { Config } from '../../config';

export default class Auth extends Main {

    constructor(props) {
        super(props);
    }

    createJWToken(details = {}) {
        return new Promise((resolve, reject) => {
            details.maxAge = details.maxAge || Config.JWL_DEFAULT_AGE;
            let token = jwt.sign({
                data: details
            }, Config.JWT_SECRET, {
                    expiresIn: details.maxAge,
                    algorithm: Config.JWL_ALGORITHAM
                });
                resolve(token);
        });
    }

    verifyJWTToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, Config.JWT_SECRET, (err, decodedToken) => {
                if (err || !decodedToken) {
                    return reject(err)
                }
                resolve(decodedToken)
            });
        });
    }
};