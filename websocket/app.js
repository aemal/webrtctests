var https = require('https'),     
    fs =    require('fs');        

var options = {
    key:    fs.readFileSync('/etc/cert/privkey.pem'),
    cert:   fs.readFileSync('/etc/cert/cert.pem')//,
    //ca:     fs.readFileSync('ssl/ca.crt') 
};

var app = https.createServer(options);
io = require('socket.io').listen(app);     //socket.io server listens to https connections
//app.listen(8895, "0.0.0.0");
app.listen(9090);

//==========================================================================

/*var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(9090);*/

/*app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});*/////

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);////this sends it to everyone, including the sender.
		console.log(data);
		//socket.broadcast.emit('new message', data);//sends it to everyone except the sender.
	});
});