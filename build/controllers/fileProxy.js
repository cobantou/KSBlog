"use strict";
const Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));
let image = function (req, res, next) {
    let url = req.query.url;
    request.get({
        url: url,
    }).pipe(res);
};
exports.image = image;
