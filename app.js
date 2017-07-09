const express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const lessMiddleware = require('less-middleware');
var cors = require('cors');


const router = require('./routerWeb');
const apiRouter = require('./routerApi');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


// 设置 Session
app.use(session({
    name: "WTID",
    store: new RedisStore({
/*        host: "127.0.0.1",
        port: 6379,
        db: 0*/
    }),
    resave:false,
    saveUninitialized:false,
    secret: 'what ever secret'
}))

//路由
app.use('/', router);
//api
//todo cors是做什么的？
app.use('/api/', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
