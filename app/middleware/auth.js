/**
 * Created by jovialis (Dylan Hanson) on 9/12/20
 **/

const createError = require('http-errors');

function requireUser(req, res, next) {
    if (!req.user) {
        return next(createError(401, "Authentication required."));
    } else {
        return next()
    }
};

function requireServerOrigin(req, res, next) {
    const auth = req.get('Authorization');
    const origin = req.get('Origin');
    if (!auth || !origin) {
        return next(createError(401, "Proper authentication required."));
    }

    const token = auth.split(' ')[1].trim();
    const url = origin.trim();
    if (token === process.env.MY_SECRET && url === process.env.MY_URL) {
        req.serverOrigin = true;
        return next();
    } else {
        return next(createError(401, "Authentication required."));
    }
}

function requireAuthentication(req, res, next) {
    if (req.user) {
        return next();
    }

    return requireServerOrigin(req, res, next);
}

module.exports = {
    requireUser,
    requireServerOrigin,
    requireAuthentication
};