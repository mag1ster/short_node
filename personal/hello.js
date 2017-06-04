var http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('/Web Design/personal/node/test.html', 'utf-8', function(err, content) {
        if (err) throw err;
        response.write(content);
        response.end();
    });

}).listen(8080);
console.log('Listening on port 8080');