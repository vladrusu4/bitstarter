var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var cssfile = "css/main.css";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
});

app.get('/css/main.css', function(request, response) {
    var css = fs.readFileSync(cssfile).toString();
    response.send(css);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

