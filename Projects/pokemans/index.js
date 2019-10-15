const fetch = require('node-fetch');
const express = require('express');

var port = 5500;
var app = express();

app.use(express.static('public'));

app.listen(port, () => {});

app.get('/', (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon-form/2/').then(res => res.json()).then(data => res.send(`
    <img src="${data.sprites.front_default}"/> 
    
    <a href="./1">Next</a>`));
})

app.get('/1', (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon-form/3/').then(res => res.json()).then(data => res.send(`<img src="${data.sprites.back_default}"/> <a href="./">Back</a> <a href="./2">Next</a>`));
})

app.get('/2', (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon-form/4/').then(res => res.json()).then(data => res.send(`<img src="${data.sprites.back_default}"/> <a href="./1">Back</a>`));
})