"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));
const config_1 = require("../config");
let login = function (req, res, next) {
    res.render('login', { title: 'Express', clientId: config_1.default.github.clientId });
};
exports.login = login;
let signout = function (req, res, next) {
    req.session.userInfo = undefined;
    res.redirect('/');
};
exports.signout = signout;
