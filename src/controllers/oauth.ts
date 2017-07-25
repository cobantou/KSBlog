import config from '../config';
import Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));

let github = function (req, res, next) {
    res.redirect("https://github.com/login/oauth/authorize?client_id=" + config.github.clientId + "&scope=repo")
}

exports.github = github;


/**
 * 1.用户通过链接登陆github，成功后github跳转至回调页面，查询参数有code
 * 2.发送code，clientId，clientSecret到github去获取token
 * 3.发送token到github去获取用户信息
 * 4.将信息存储到session
 * @param req
 * @param res
 * @param next
 */
let githubCallback = function (req, res, next) {
    let clientId = config.github.clientId;
    let clientSecret = config.github.clientSecret;
    let code = req.query.code;

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
    }).then((data) => {
        let accessToken;
        if (!data.error && data.statusCode == 200) {
            let body = JSON.parse(data.body)
            accessToken = body.access_token

        }
        return accessToken
    }).then((accessToken) => {
        return request.getAsync({
            url: 'https://api.github.com/user?access_token=' + accessToken,
            headers: {
                "user-agent": "whatever"
            }
        }).then((data) => {
            let info;
            if (!data.error && data.statusCode == 200) {
                let body = JSON.parse(data.body)
                info = {
                    name: body.login,
                    avatar: body.avatar_url,
                    id: body.id,
                    accessToken: accessToken
                }
            }
            return info
        })
    }).then((info) => {
        let session = req.session;
        session.userInfo = info;

        res.redirect('/');
    })
};


exports.githubCallback = githubCallback;

