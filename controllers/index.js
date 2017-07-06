var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"));


var index = function (req, res, next) {
    request.getAsync('https://zhuanlan.zhihu.com/api/columns/DaqizhiXiang/posts?limit=20&offset=20')
        .then(function (data) {
            var resData;

            if (!data.error && data.statusCode == 200) {
                var body = JSON.parse(data.body)
                resData = {
                    title: 'WhatEver',
                    articles: body,
                    recommendations: [{title: "title1", url: ""}]
                }

            }

            return resData
        })
        .then(function (resData) {
            return request.getAsync('https://zhuanlan.zhihu.com/api/recommendations/posts?limit=5&offset=0&seed=4')
                .then(function (data) {
                    if (!data.error && data.statusCode == 200) {
                        var body = JSON.parse(data.body)
                        resData.recommendations = body;
                    }
                    return resData
                })
        })
        .then(function (resData) {
            console.log(resData)
            res.render('index', resData);
        })
};


exports.index = index;

