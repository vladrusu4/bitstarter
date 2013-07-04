var express = require('express');
var app = express.createServer(express.logger());
var http = require('http');
var fs = require('fs');

app.get('/index.html', function(request, response) {
    var buf = new Buffer(256);
	var data = fs.readFileSync("./index.html", "utf8").toString();
    var len = buf.write(data, 0);
//	response.writeHead(200);
	response.write(buf.toString('utf8', 0, len));
	response.end();
});

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
