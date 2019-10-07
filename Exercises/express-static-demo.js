var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function () {
   console.log('Server listening on localhost:%s', port);
});
var port = 8080;
app.use(express.static(__dirname));