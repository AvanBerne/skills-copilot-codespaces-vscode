// Create web server
// Create a web server that listens on port 3000, and serves up the comments.js file from the previous exercise.

// When you're ready, run node app.js to start the server, and open http://localhost:3000 in your web browser.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('comments.js').pipe(res);
});

server.listen(3000);