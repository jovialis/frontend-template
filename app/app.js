/**
 * Created by jovialis (Dylan Hanson) on 9/11/20
 **/

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const enforce = require('express-sslify');

const sessionRouter = require('./routes/sessions');
const authRouter = require('./routes/auth');

const dev = process.env.NODE_ENV !== 'production'
const app = express();

// Import NextJS
const next = require('next');
const nextApp = next({dev})
const nextHandler = nextApp.getRequestHandler();

// Prepare Next
nextApp.prepare();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Enforce HTTPS if we are on a production server
if (!dev) {
    app.use(enforce.HTTPS({trustProtoHeader: true}));
    app.set('trust proxy', true);
}


// Register routers
app.use(sessionRouter);
app.use(authRouter);

// API routes
// TODO: Register routes


// Redirect everything else through Next (frontend)
app.all('*', (req, res) => {
    return nextHandler(req, res);
});

module.exports = app;
