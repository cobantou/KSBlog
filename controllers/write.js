var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));
var config = require('../config');


var index = function (req, res, next) {
    var clientId = config.github.clientId;
    var clientSecret = config.github.clientSecret;
    var session = req.session;

    //评论列表:https://api.github.com/repos/cobantou/ksblog/issues/1/comments
    request.getAsync({
        url: "https://api.github.com/repos/cobantou/ksblog/issues/1/comments",
        headers: {
            "user-agent": "whatever"
        }
    }).then(function (data) {
        var comments;
        if (!data.error && data.statusCode == 200) {
            var body = JSON.parse(data.body)
            comments = body;
        }
        return comments
    }).then(function (comments) {
        var resData = {
            title: "写点什么",
            userInfo: session.userInfo,
            client_id: clientId,
            client_secret: clientSecret,
            comments: comments
        }

        res.render('articles/write', resData);
    })


};
exports.index = index;

var postGithub = function (req, res, next) {
    var token = req.session.userInfo && req.session.userInfo.accessToken;

    request.postAsync({
        url: "https://api.github.com/repos/cobantou/ksblog/issues/1/comments",
        headers: {
            "Authorization": "token " + token,
            "user-agent": "whatever"
        },
        body: JSON.stringify({"body": req.body.body})

    }).then(function (data) {

        if (!data.error && data.statusCode == 201) {
            res.redirect("/write")
        }

    })
};
exports.postGithub = postGithub;

