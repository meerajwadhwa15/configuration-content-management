import App from './app';
import {Config} from './config';

const { PORT = Config.defaultPort } = process.env;
App.listen(PORT, function () {
    console.log(`App listening on port ${PORT} !`);
});