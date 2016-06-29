var express = require('express'),
	app = express(),
	server = require('https').createServer(app),
	io = require('socket.io').listen(server);

server.listen(9090);

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);////this sends it to everyone, including the sender.
		//socket.broadcast.emit('new message', data);//sends it to everyone except the sender.
	});
});