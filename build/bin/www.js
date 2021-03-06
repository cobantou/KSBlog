#!/usr/bin/env node
"use strict";
const app = require('../app');
const debug = require('debug')('ksblog:server');
const http = require('http');
const moment = require('moment');
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
/**
 * socket.io
 */
const io = require('socket.io')(server);
let users = 0;
io.on('connection', function (socket) {
    console.log(socket.request.headers.cookie);
    ++users;
    io.emit('user connected', {
        msg: '来了1位新人～',
        time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        users
    });
    socket.on('chat message', function (msg) {
        io.emit('chat message', { msg, time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss") });
    });
    socket.on('disconnect', function () {
        --users;
        io.emit('user disconnected', {
            msg: '有人离开了～',
            time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
            users
        });
    });
});
