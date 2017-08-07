"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require('./config');
const express = require('express');
const index_1 = require("./controllers/index");
const oauth_1 = require("./controllers/oauth");
const sign_1 = require("./controllers/sign");
const fileProxy_1 = require("./controllers/fileProxy");
const write_1 = require("./controllers/write");
const socket_1 = require("./controllers/socket");
const g2_1 = require("./controllers/g2");
let router = express.Router();
/* home page. */
router.get('/', index_1.index);
/*  users . */
router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});
/* sign. */
router.get('/login', sign_1.login);
router.get('/signout', sign_1.signout);
/* articles */
router.get('/articles', function (req, res, next) {
    res.render('articles/total_list', { title: 'Express' });
});
router.get('/write', write_1.index);
router.post("/writeToGithub", write_1.postGithub);
/* OAuth */
router.get('/oauth/github', oauth_1.github);
router.get('/oauth/githubCallback', oauth_1.githubCallback);
/* fileProxy */
router.get('/fileProxy/image/', fileProxy_1.image);
/* socket. */
router.get('/chatRoom', socket_1.chatRoom);
/* g2 */
router.get('/g2', g2_1.g2);
/* three.js */
/*router.get('/ac', ac);*/
/*
 module.exports = router;
 */
exports.default = router;
