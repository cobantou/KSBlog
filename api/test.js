let getTest = function (req, res, next) {
    res.send('get test');
};
exports.getTest = getTest;

let postTest = function (req, res, next) {
    res.send('post test');
};
exports.postTest = postTest;
