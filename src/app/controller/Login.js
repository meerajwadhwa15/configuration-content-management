import Auth from './Auth';
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
                this.errorResonse('Server Internal Error', 500);
            });
        }, (err) => {
            this.errorResonse('Enter valid username and password.', 404);
        });
    }
}