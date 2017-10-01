import App from './app/app';
import {Config} from './config';

const { PORT = Config.DEFAULT_PORT } = process.env;
App.listen(PORT, function () {
    console.log(`App listening on port ${PORT} !`);
});