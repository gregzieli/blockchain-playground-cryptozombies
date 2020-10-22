var express = require('express')
var serveStatic = require('serve-static')

var staticBasePath = '.';

var app = express();

app.use(serveStatic(staticBasePath))
app.listen(8080)
console.log("listening...");

// must be served, metamask won't connect to filesystem
