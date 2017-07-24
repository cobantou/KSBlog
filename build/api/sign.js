"use strict";
let login = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    if (email === "cobantou@qq.com" && password === "123456") {
        return res.send('login success');
    }
    return res.send('login test');
};
exports.login = login;
let logout = function (req, res, next) {
    res.send('logout test');
};
exports.logout = logout;
let signUp = function (req, res, next) {
    res.send('signUp test');
};
exports.signUp = signUp;
