/**
 * Created by pengshuo on 17/8/4.
 */
const app = require('./app');
const http = require('http').Server(app);
const io = require('socket.io')(http);

export default function mysocket(){
  io.on('connection', function(socket){
    console.log('a user connected');
  });
}
