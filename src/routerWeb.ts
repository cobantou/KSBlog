const config = require('./config');

const express = require('express');
import {index} from './controllers/index';
import {githubCallback, github} from './controllers/oauth';
import {login, signout} from './controllers/sign';
import {image} from './controllers/fileProxy';
import {postGithub, index as writeIndex} from './controllers/write';
import {chatRoom} from './controllers/socket';
import {g2} from './controllers/g2';


let router = express.Router();

/* home page. */
router.get('/', index);

/*  users . */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource');
});


/* sign. */
router.get('/login', login);
router.get('/signout', signout);

/* articles */
router.get('/articles', function (req, res, next) {
  res.render('articles/total_list', {title: 'Express'});
});
router.get('/write', writeIndex);
router.post("/writeToGithub", postGithub)


/* OAuth */
router.get('/oauth/github', github);
router.get('/oauth/githubCallback', githubCallback);

/* fileProxy */
router.get('/fileProxy/image/', image);

/* socket. */
router.get('/chatRoom', chatRoom);

/* g2 */
router.get('/g2', g2);

/* three.js */
/*router.get('/ac', ac);*/

/*
 module.exports = router;
 */

export default router;

