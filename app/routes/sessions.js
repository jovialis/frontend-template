/**
 * Created by jovialis (Dylan Hanson) on 9/12/20
 **/

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Preserve sessions
router.use(require('express-session')({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {secure: (process.env.NODE_ENV === 'production')},
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

module.exports = router;