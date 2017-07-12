var config = require('./config');

const express = require('express');
var indexController = require('./controllers/index');
var oauthController = require('./controllers/oauth');
var signController = require('./controllers/sign');
var fileProxyController = require('./controllers/fileProxy');
var writeController = require('./controllers/write');

const router = express.Router();

/* home page. */
router.get('/', indexController.index);

/*  users . */
router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});


/* sign. */
router.get('/login', signController.login);
router.get('/signout', signController.signout);

/* articles */
router.get('/articles', function (req, res, next) {
    res.render('articles/total_list', {title: 'Express'});
});
router.get('/write', writeController.index);
router.post("/writeToGithub", writeController.postGithub)


/* OAuth */
router.get('/oauth/github', oauthController.github);
router.get('/oauth/githubCallback', oauthController.githubCallback);

/* fileProxy */
router.get('/fileProxy/image/', fileProxyController.image);


module.exports = router;
