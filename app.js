var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Hello! Created by Node.js</h1>');
	res.write('<h1>Hello! Created by Node</h1>');

	res.end();
}).listen(3000);
