import Promise = require("bluebird");
const request = Promise.promisifyAll(require("request"));


export let index = function (req, res, next) {
  let session = req.session;
  let daqizhixiang = request.getAsync('https://zhuanlan.zhihu.com/api/columns/DaqizhiXiang/posts?limit=20&offset=20');
  let recommendations = request.getAsync('https://zhuanlan.zhihu.com/api/recommendations/posts?limit=5&offset=0&seed=4');

  Promise
    .all([daqizhixiang, recommendations])
    .then((datalist) => {
      let resData;

      if (!datalist[0].error && datalist[0].statusCode == 200) {
        let body = JSON.parse(datalist[0].body)

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

      if (!datalist[1].error && datalist[1].statusCode == 200) {
        let body = JSON.parse(datalist[1].body)
        resData.recommendations = body;
      }

      return resData
    })
    .then((resData) => {
      res.render('index', resData);
    })
};



