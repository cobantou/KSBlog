const Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));


let index = function (req, res, next) {
    let session = req.session;

    request.getAsync('https://zhuanlan.zhihu.com/api/columns/DaqizhiXiang/posts?limit=20&offset=20')
        .then((data) => {
            let resData;

            if (!data.error && data.statusCode == 200) {
                let body = JSON.parse(data.body)

                body.map(function (i) {
                    i.titleImage = "/fileProxy/image?url=" + i.titleImage;
                    return i;
                })

                resData = {
                    title: 'WhatEver',
                    articles: body,
                    recommendations: [{title: "title1", url: ""}],
                    userInfo: session.userInfo
                }

            }

            return resData
        })
        .then((resData) => {
            return request.getAsync('https://zhuanlan.zhihu.com/api/recommendations/posts?limit=5&offset=0&seed=4')
                .then((data) => {
                    if (!data.error && data.statusCode == 200) {
                        var body = JSON.parse(data.body)
                        resData.recommendations = body;
                    }
                    return resData
                })
        })
        .then((resData) => {
            res.render('index', resData);
        })
};


exports.index = index;

