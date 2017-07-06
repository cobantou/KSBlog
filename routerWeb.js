const express = require('express');
var articlesController = require('./controllers/articles');

const router = express.Router();

/* home page. */
router.get('/', articlesController.index);

/*  users . */
router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});


/* login. */
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Express'});
});

/* articles */
router.get('/articles', function (req, res, next) {
    res.render('articles/total_list', {title: 'Express'});
});


module.exports = router;
