var config = require('./config');

const express = require('express');
var indexController = require('./controllers/index');
var oauthController = require('./controllers/oauth');
var signController = require('./controllers/sign');

const router = express.Router();

/* home page. */
router.get('/', indexController.index);

/*  users . */
router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});


/* login. */
router.get('/login', signController.login);

/* articles */
router.get('/articles', function (req, res, next) {
    res.render('articles/total_list', {title: 'Express'});
});

/* OAuth */
router.get('/oauth/githubCallback', oauthController.github);


module.exports = router;
