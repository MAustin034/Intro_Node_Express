var fs = require('fs');
// fs.readFile('./data1.json', function(err, data) {
//     console.log(data);
// });
fs.readFile('./data.json', 'utf-8', 
function(err, data) {
    console.log(data);
});
// console.log(data);
//    console.log(data.name);
data = JSON.parse(data);
  console.log(data.name);
  app.use('/users', function(req, res) {
    fs.readFile('./data1.json', 'utf-8', function(err, data) {
        res.send(data);
    });
});