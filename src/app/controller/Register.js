import Main from './Main';
import { Config } from '../../config';
import { ObjectID } from 'mongodb';

export default class Login extends Main {
    constructor(props) {
        super(props);
        this.collectionName = 'users';
    }

    validateUsername() {
        this.getRecord(this.collectionName, {
            $or: [
                { username: this.props.req.body.username },
                { email: this.props.req.body.email }
            ]
        }).then((users) => {
            this.errorResonse(Config.USERNAME_ALREADY_CHOOSEN, 404);
        }, () => {
            this.insertRecord(this.collectionName, {
                name: this.props.req.body.name,
                username: this.props.req.body.username,
                password: this.props.req.body.password,
                role: this.props.req.body.role,
                email: this.props.req.body.email,
                created:new Date(),
                updated:new Date()
            }).then((user) => {
                this.response({ user });
            }, (err) => {
                this.errorResonse(err, 404);
            });
        });
    }

    update() {
        this.updateRecord(this.collectionName, { _id: ObjectID(this.props.req.body.id) }, {
            $set: {
                name: this.props.req.body.name,
                role: this.props.req.body.role,
                updated:new Date()
            }
        }).then((user) => {
            this.response({ user });
        }, (err) => {
            this.errorResonse(err, 404);
        });
    }

    register() {
        this.validateUsername();
    }

    delete() {
        this.deleteRecord(this.collectionName, { _id: ObjectID(this.props.req.query.id) }).then(() => {
            this.response({ success: true });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }

    get() {
        this.getRecord(this.collectionName, { role: 'User' }).then((users) => {
            this.response({ users });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }
}