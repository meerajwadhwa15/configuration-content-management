import { Router } from 'express';
import {Config} from '../../config';
import Configurations from '../../app/controller/Configurations';

const configurationsRoutes = Router();

configurationsRoutes.post(Config.route.CONFIGURATION, (req, res) => {
    let configurations = new Configurations({res, req});
    configurations.makeDBConnection().then(() => {
        console.log('connection successfull');
        configurations.create();
    });
});

configurationsRoutes.put(Config.route.CONFIGURATION, (req, res) => {
    let configurations = new Configurations({res, req});
    configurations.makeDBConnection().then(() => {
        configurations.update();
    });
});

configurationsRoutes.put(Config.route.APPROVE_CONFIGURATION, (req, res) => {
    let configurations = new Configurations({res, req});
    configurations.makeDBConnection().then(() => {
        configurations.approve();
    });
});

configurationsRoutes.put(Config.route.PUBLISH_CONFIGURATION, (req, res) => {
    let configurations = new Configurations({res, req});
    configurations.makeDBConnection().then(() => {
        configurations.publish();
    });
});

configurationsRoutes.get(Config.route.CONFIGURATION, (req, res) => {
    let configurations = new Configurations({res, req});
    configurations.makeDBConnection().then(() => {
        configurations.get();
    });
});

configurationsRoutes.get(Config.route.ALL_CONFIGURATION, (req, res) => {
    let configurations = new Configurations({res, req});
    configurations.makeDBConnection().then(() => {
        configurations.allConfigurations();
    });
});

configurationsRoutes.delete(Config.route.CONFIGURATION, (req, res) => {
    let configurations = new Configurations({res, req});
    configurations.makeDBConnection().then(() => {
        configurations.delete();
    });
});

export default configurationsRoutes;