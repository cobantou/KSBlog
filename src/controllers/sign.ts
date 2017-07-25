import Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));
import config from '../config';

export let login = function (req, res, next) {
    res.render('login', {title: 'Express', clientId: config.github.clientId});
};



export let signout = function (req, res, next) {
    req.session.userInfo = undefined;

    res.redirect('/');
};



