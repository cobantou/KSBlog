var index = function (req, res, next) {
    res.render('index', {title: 'WhatEver'});
};


exports.index = index;

