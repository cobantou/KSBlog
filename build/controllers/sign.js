"use strict";
const Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));
const config = require('../config');
let login = function (req, res, next) {
    res.render('login', { title: 'Express', clientId: config.github.clientId });
};
exports.login = login;
let signout = function (req, res, next) {
    req.session.userInfo = undefined;
    res.redirect('/');
};
exports.signout = signout;
