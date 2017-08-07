"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));
const marked = require('marked');
exports.g2 = function (req, res, next) {
    res.render('antv/g2');
};
