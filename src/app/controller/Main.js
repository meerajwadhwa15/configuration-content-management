var MongoClient = require('mongodb').MongoClient;
import { Config } from '../../config';

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

    updateRecord(collection, query, data) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).update(query, data, (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        });
    }

    deleteRecord(collection, options) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).remove(options, (err, result) => {
                if(err) reject(err);
                resolve(result);
            });
        });
    }

    getRecord(collection, options) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).find(options).toArray((err, result) => {
                if(err || !result || !result.length) reject(err);
                resolve(result);
            });
        });
    }

    makeDBConnection() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(`mongodb://${Config.database.HOST}:${Config.database.PORT}/${Config.database.DATABASE}`, (err, db) => {
                if (err) reject(err);
                this.db = db;
                resolve('success');
            });
        });
    }

    closeDBConnection() {
        if(this.db) {
            this.db.close();
        }
    }

    response(response) {
        this.closeDBConnection();
        this.props.res.send(response);
    }

    errorResonse(response, statusCode = 400) {
        this.closeDBConnection();
        this.props.res.send({error: response});
    }
};