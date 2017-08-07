import Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));
import config from '../config';
const marked = require('marked');


export let g2 = function (req, res, next) {
    res.render('antv/g2')

};



