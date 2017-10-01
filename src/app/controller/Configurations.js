import Main from './Main';
import { ObjectID } from 'mongodb';

export default class Configurations extends Main {
    constructor(props) {
        super(props);
        this.collectionName = 'configuration';
    }

    create() {
        this.getRecord(this.collectionName, {
            name: this.props.req.body.name
        }).then((users) => {
            this.errorResonse(`Configuration already defined for ${this.props.req.body.name}`, 400);
        }, () => {
            this.insertRecord(this.collectionName, {
                name: this.props.req.body.name,
                configuration: this.props.req.body.configuration,
                userId: this.props.req.body.userId,
                approve: false,
                publish: false
            }).then((configuration) => {
                this.response({ configuration });
            }, (err) => {
                this.errorResonse(err, 404);
            });
        });
    }

    update() {
        this.updateRecord(this.collectionName, { _id: ObjectID(this.props.req.body.id) }, {
            $set: {
                name: this.props.req.body.name,
                configuration: this.props.req.body.configuration,
                approve: false,
                publish: false
            },
            $currentDate: { lastModified: true }
        }).then((configuration) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 404);
        });
    }

    delete() {
        this.deleteRecord(this.collectionName, { _id: ObjectID(this.props.req.body.id) }).then(() => {
            this.response({ success: true });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }

    allConfigurations() {
        this.getRecord(this.collectionName).then((configuration) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }

    get() {
        this.getRecord(this.collectionName, { userId: this.props.req.body.userId }).then((configurations) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }

    approve() {
        this.updateRecord(this.collectionName, { _id: ObjectID(this.props.req.body.id) }, {
            $set: {
                approve: true
            },
            $currentDate: { lastModified: true }
        }).then((configuration) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 404);
        });
    }

    publish() {
        this.updateRecord(this.collectionName, { _id: ObjectID(this.props.req.body.id) }, {
            $set: {
                publish: true
            },
            $currentDate: { lastModified: true }
        }).then((configuration) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 404);
        });
    }
}