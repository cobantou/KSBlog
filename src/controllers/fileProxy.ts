import Promise = require("bluebird");
let request = Promise.promisifyAll(require("request"));

export let image = function (req, res, next) {
    let url = req.query.url
    request.get({
        url: url,
    }).pipe(res)
};



