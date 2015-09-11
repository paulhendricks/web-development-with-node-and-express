/**
 * Created by phendricks on 9/11/2015.
 */
var http = require("http"),
    fs = require("fs");

function serveStaticFiles(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;
    fs.readFile(_dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': 'text/plain' });
            red.end(data)
        }
    })
}

http.createServer(function(req, res) {
    // nromalize url by removing querystring, optional
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serveStaticFiles(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFiles(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.jpg':
            serveStaticFiles(res, '/public/img/logo.jpg', 'image/jpeg');
            break;
        default:
            serveStaticFiles(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');