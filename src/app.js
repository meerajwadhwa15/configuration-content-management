import express from 'express';
import routes from './routes/';
import logger from 'morgan';

const App = express();

App.use('/', routes);
App.use('/static', express.static(__dirname + '/assets'));

// Catch 404 and forward to error handler
App.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler
App.use((err, req, res, next) => {
    res.status(err.status || 500)
        .render('error', {
            message: err.message
        });
});

export default App;


