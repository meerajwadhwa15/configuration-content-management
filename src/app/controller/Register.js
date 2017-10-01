import Main from './Main';
export default class Login extends Main {
    constructor(props) {
        super(props);
    }

    validateUsername() {
        this.getRecord('users', {
            $or: [
                { username: this.props.req.body.username },
                { email: this.props.req.body.email }
            ]
        }).then((users) => {
            this.errorResonse('Username and email is already used.', 404);
        }, () => {
            this.insertRecord('users', {
                username: this.props.req.body.username,
                password: this.props.req.body.password,
                role: this.props.req.body.type,
                email: this.props.req.body.email
            }).then((user) => {
                this.response({ user });
            }, (err) => {
                this.errorResonse(err, 404);
            });
        });
    }

    register() {
        this.validateUsername();
    }
}