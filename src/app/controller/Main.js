var MongoClient = require('mongodb').MongoClient;

export default class Main {
    constructor(props) {
        this.props = props;
        this.makeDBConnection();
    }

    createCollection(collection) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find(options).toArray((err, result) => {
                if(err || !result || !result.length) reject(err);
                resolve(result);
            });
        });
    }

    insertRecord(collection, data) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).insert(data, (err, result) => {
                if(err) reject(err);
                resolve(result.ops);
            });
        });
    }

    updateRecord(collection, options) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find(options).toArray((err, result) => {
                if(err || !result || !result.length) reject(err);
                resolve(result);
            });
        });
    }

    deleteRecord(collection, options) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find(options).toArray((err, result) => {
                if(err || !result || !result.length) reject(err);
                resolve(result);
            });
        });
    }

    getRecord(collection, options) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find(options).toArray((err, result) => {
                if(err || !result || !result.length) reject(err);
                resolve(result[0]);
            });
        });
    }

    makeDBConnection() {
        return new Promise((resolve, reject) => {
            MongoClient.connect('mongodb://localhost:27017/configure-content-management', (err, db) => {
                if (err) reject(err);
                this.db = db;
                resolve('success');
            });
        });
    }

    response(response) {
        this.props.res.send(response);
    }

    errorResonse(response, statusCode = 400) {
        this.props.res.send({error: response});
    }
};