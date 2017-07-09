var config = require('../config');

var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));

/**
 * 1.用户通过链接登陆github，成功后github跳转至回调页面，查询参数有code
 * 2.发送code，clientId，clientSecret到github去获取token
 * 3.发送token到github去获取用户信息
 * 4.将信息存储到session
 * @param req
 * @param res
 * @param next
 */
var github = function (req, res, next) {
    var clientId = config.github.clientId;
    var clientSecret = config.github.clientSecret;
    var code = req.query.code;

    request.postAsync({
        headers: {
            'accept': 'application/json'
        },
        url: "https://github.com/login/oauth/access_token",
        form: {
            client_id: clientId,
            client_secret: clientSecret,
            code: code
        }
    }).then(function (data) {
        var accessToken;
        if (!data.error && data.statusCode == 200) {
            var body = JSON.parse(data.body)
            accessToken = body.access_token

        }
        return accessToken
    }).then(function (accessToken) {
        return request.getAsync({
            url: 'https://api.github.com/user?access_token=' + accessToken,
            headers: {
                "user-agent": "whatever"
            }
        }).then(function (data) {
            var info;
            if (!data.error && data.statusCode == 200) {
                var body = JSON.parse(data.body)
                info={
                    name:body.login,
                    avatar:body.avatar_url,
                    id:body.id
                }
            }
            return info
        })
    }).then(function(info){
        var session =req.session;
        session.userInfo = info;

        res.redirect('/');
    })
};


exports.github = github;

