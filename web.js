var express = require('express'),
	app = express.createServer(express.logger()),
	http = require('http'),
	fs = require('fs');

app.get('/', function(request, response) {
	var buf = new Buffer(256);   
	var len = buf.write(fs.readFileSync("./index.html", "utf8").toString(), 0);
	response.write(buf.toString('utf8', 0, len));
	response.end();
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
