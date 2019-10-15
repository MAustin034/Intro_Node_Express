const fetch = require('node-fetch');
const express = require('express');

var port = 5500;
var app = express();

app.use(express.static('public'));

app.listen(port, () => {});