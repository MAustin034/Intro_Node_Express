var express = require('express');
 var app = express();
 var port = 5500;

 app.use(express.static(__dirname+"/public"));

 app.listen(port, function() {
     console.log('Server listening on localhost:%s', port);
 });
 console.log(__dirname);
 app.get('/home', function(req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=\, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
          integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
          integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
          crossorigin=""
        ></script>
        <style>
          #issMap {
            height: 360px;
          }
        </style>
    
        <title>Fetch JSON from API and map lat lon</title>
      </head>
      <body>
        <h1>Where is the ISS?</h1>
    
        <p>
          latitude: <span id="lat"></span>°<br />
          longitude: <span id="lon"></span>°
        </p>
    
        <div id="issMap"></div>
         <script src="index.js"></script>
      </body>
    </html>`);
});

app.use('/users', function(req, res) {
    
});
