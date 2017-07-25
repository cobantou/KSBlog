"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
let request = Promise.promisifyAll(require("request"));
exports.image = function (req, res, next) {
    let url = req.query.url;
    request.get({
        url: url,
    }).pipe(res);
};
