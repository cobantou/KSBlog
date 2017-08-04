import Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));
import config from '../config';
const marked = require('marked');


export let index = function (req, res, next) {
  let clientId = config.github.clientId;
  let clientSecret = config.github.clientSecret;
  let session = req.session;

  //评论列表
  request.getAsync({
    url: "https://api.github.com/repos/cobantou/ksblog/issues/1/comments",
    headers: {
      "user-agent": "whatever"
    }
  }).then((data) => {
    let comments;
    if (!data.error && data.statusCode == 200) {
      let body = JSON.parse(data.body)
      comments = body;
      comments.map(function (i) {
        i.body = marked(i.body)
        return i;
      })
    }
    return comments
  }).then((comments) => {

    let resData = {
      title: "写点什么",
      userInfo: session && session.userInfo,
      client_id: clientId,
      client_secret: clientSecret,
      comments: comments
    }

    res.render('articles/write', resData);
  })


};

export let postGithub = function (req, res, next) {
  let token = req.session.userInfo && req.session.userInfo.accessToken;

  request.postAsync({
    url: "https://api.github.com/repos/cobantou/ksblog/issues/1/comments",
    headers: {
      "Authorization": "token " + token,
      "user-agent": "whatever"
    },
    body: JSON.stringify({"body": req.body.body})

  }).then((data) => {

    if (!data.error && data.statusCode == 201) {
      res.redirect("/write")
    }

  })
};

