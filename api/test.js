var getTest = function (req, res, next) {
    res.send('get test');
};
exports.getTest = getTest;

var postTest = function (req, res, next) {
    res.send('post test');
};
exports.postTest = postTest;
