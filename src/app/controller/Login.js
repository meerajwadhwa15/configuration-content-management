import Auth from './Auth';
import { Config } from '../../config';

export default class Login extends Auth {
    constructor(props) {
        super(props);
    }

    login() {
        // validate login
        this.getRecord('users', {
            username: this.props.req.body.username,
            password: this.props.req.body.password
        }).then((user) => {
            const token = this.createJWToken(user).then((token)=> {
                this.response({token, user: user[0]});
            }, () => {
                this.errorResonse(Config.INTERNAL_SERVER_ERROR, 500);
            });
        }, (err) => {
            this.errorResonse(Config.INCORRECT_LOGIN_DETAIL, 404);
        });
    }
}