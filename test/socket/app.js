var app = require('http').createServer(),
	io = require('socket.io').listen(app)

app.listen(3000);

function handler(req, res){
	console.log('!!');
}

io.sockets.on('connection', function(socket){
	socket.emit('news',{hello:'world'});
	socket.on('news',function(data){
		console.log(data);
	});
});