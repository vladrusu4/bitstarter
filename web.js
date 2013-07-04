var express = require('express'),
   app = express.createServer(express.logger()),
   http = require('http'),
   fs = require('fs');

app.get('/index.html', function(request, response) {
    var buf = new Buffer(256),
      len;
    len = buf.write(fs.readFileSync("./index.html", "utf8").toString(), 0);
	if (len){
		response.writeHead(200);
        response.write(file, buf.toString('utf8', 0, len));
        response.end();
	} else {
		response.writeHead(500, {"Content-Type": "text/plain"});
		response.write("Error\n");
		response.end();
		return;
	}    
});
app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
