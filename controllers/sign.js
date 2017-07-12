var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));
var config = require('../config');

var login = function (req, res, next) {
    res.render('login', {title: 'Express', clientId: config.github.clientId});
};


exports.login = login;

var signout = function (req, res, next) {
    //todo 清除session
    req.session.userInfo = undefined;

    res.redirect('/');
};


exports.signout = signout;

