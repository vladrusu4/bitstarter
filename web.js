var express = require('express'),
	app = express.createServer(express.logger()),
	http = require('http'),
	fs = require('fs');

app.get('/', function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(fs.readFileSync("./index.html", "utf8").toString());
	response.end();
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
