import Main from './Main';
import { ObjectID } from 'mongodb';

export default class Configurations extends Main {
    constructor(props) {
        super(props);
        this.collectionName = 'configuration';
    }

    create() {
        this.insertRecord(this.collectionName, {
            name: this.props.req.body.name,
            configuration: JSON.stringify(this.props.req.body.configuration),
            userId: this.props.req.body.userId,
            approve: false,
            publish: false,
            approveBy: '',
            publishBy: '',
            created: new Date(),
            updated: new Date()
        }).then((configuration) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 404);
        });
    }

    update() {
        this.updateRecord(this.collectionName, { _id: ObjectID(this.props.req.body.id) }, {
            $set: {
                name: this.props.req.body.name,
                configuration: JSON.stringify(this.props.req.body.configuration),
                updated: new Date()
            }
        }).then((configuration) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 404);
        });
    }

    delete() {
        this.deleteRecord(this.collectionName, { _id: ObjectID(this.props.req.query.id) }).then(() => {
            this.response({ success: true });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }

    allConfigurations() {
        this.getRecord(this.collectionName).then((configurations) => {
            this.response({ configurations });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }

    get() {
        this.getRecord(this.collectionName, { userId: this.props.req.query.userId }).then((configurations) => {
            this.response({ configurations });
        }, (err) => {
            this.errorResonse(err, 400);
        });
    }

    approve() {
        this.updateRecord(this.collectionName, { _id: ObjectID(this.props.req.body.id) }, {
            $set: {
                approve: true,
                approveBy: this.props.req.body.approveBy
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
                publish: true,
                publishBy: this.props.req.body.publishBy
            },
            $currentDate: { lastModified: true }
        }).then((configuration) => {
            this.response({ configuration });
        }, (err) => {
            this.errorResonse(err, 404);
        });
    }
}