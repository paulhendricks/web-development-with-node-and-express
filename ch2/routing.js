/**
 * Created by phendricks on 9/11/2015.
 */
var http = require("http")

http.createServer(function(req, res) {
    // nromalize url by removing querystring, optional
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world!");
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');