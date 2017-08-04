"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by pengshuo on 17/8/4.
 */
const app = require('./app');
const http = require('http').Server(app);
const io = require('socket.io')(http);
function mysocket() {
    io.on('connection', function (socket) {
        console.log('a user connected');
    });
}
exports.default = mysocket;
