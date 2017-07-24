"use strict";
const config = require('./config');
const express = require('express');
const indexController = require('./controllers/index');
const oauthController = require('./controllers/oauth');
const signController = require('./controllers/sign');
const fileProxyController = require('./controllers/fileProxy');
const writeController = require('./controllers/write');
let router = express.Router();
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
    res.render('articles/total_list', { title: 'Express' });
});
router.get('/write', writeController.index);
router.post("/writeToGithub", writeController.postGithub);
/* OAuth */
router.get('/oauth/github', oauthController.github);
router.get('/oauth/githubCallback', oauthController.githubCallback);
/* fileProxy */
router.get('/fileProxy/image/', fileProxyController.image);
module.exports = router;
