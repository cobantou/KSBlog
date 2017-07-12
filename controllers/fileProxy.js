var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));
var config = require('../config');

var image = function (req, res, next) {
    var url = req.query.url

    request.get({
        url: url,
    }).pipe(res)
};


exports.image = image;

