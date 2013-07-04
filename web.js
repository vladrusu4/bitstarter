var express = require('express');
var app = express.createServer(express.logger());

var http = require('http');
var fs = require('fs');
var index = "index.html";

app.get(index, function(request, response) {
    var buf = new Buffer(256);
    var len = buf.write("Hello World 2!", 0);
    fs.readFileSync(index, "binary", function(err, file) {
	if(err) {
		response.writeHead(500, {"Content-Type": "text/plain"});
		response.write(err + "\n");
		response.end();
		return;
	}
	response.writeHead(200);
	response.write(file, buf.toString('utf8', 0, len));
	response.end();
    });
});
app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
