/**
 * Created by jovialis (Dylan Hanson) on 9/11/20
 **/

const createError = require('http-errors');

const express = require('express');
const router = express.Router();

const passport = require('passport');
const Strategy = require('passport-google-oauth20').Strategy;


// Configure Passport for client authentication
passport.use(new Strategy({

    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_OAUTH_REDIRECT

}, async function (accessToken, refreshToken, profile, cb) {
    const domain = profile._json.hd;

    // TODO: Validate domain if you want
    // Handle the google profile
    const {sub: googleId, name, picture: portrait, email} = profile._json;

    // Log in the user
    try {
        // TODO: Create user
        // cb(null, user);
    } catch (e) {
        console.log(e);
        cb(null);
    }
}));

passport.serializeUser(function (user, cb) {
    cb(null, user.uid);
});

passport.deserializeUser(async function (uid, cb) {
    // Fetch profile from UID
    // TODO: Fetch user from UID
    // cb(null, user);
});

// Configure passport
router.use(passport.initialize());
router.use(passport.session());

router.get('path', passport.authenticate('google', {
    // hd: 'vanderbilt.edu',
    prompt: 'select_account',
    scope: ['email', 'profile', 'openid']
}));

router.get(process.env.GOOGLE_OAUTH_REDIRECT, passport.authenticate('google', {
    successRedirect: 'path',
    failureRedirect: 'path'
}), (req, res) => {
    res.redirect('path');
});

router.get('path', (req, res) => {
    req.logout();
    res.redirect('path');
});

module.exports = router;