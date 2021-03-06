import express = require('express');
import session = require('express-session');
import connectRedis = require('connect-redis');
import path = require('path');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import lessMiddleware = require('less-middleware');
import cors = require('cors');

import router from './routerWeb';
import apiRouter from './routerApi';

let app = express();
let RedisStore = connectRedis(session);


// view engine setup
app.set('views', path.resolve(__dirname, '..', 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.resolve(__dirname, '..', 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(lessMiddleware(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));


// 设置 Session
app.use(session({
  name: "WTID",
  store: new RedisStore({
    /*        host: "127.0.0.1",
     port: 6379,
     db: 0*/
  }),
  resave: false,
  saveUninitialized: false,
  secret: 'what ever secret'
}))

//路由
app.use('/', router);
//api
//todo cors是做什么的？
app.use('/api/', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
