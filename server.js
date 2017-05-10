var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/frontend'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
})

app.listen(3000, function() {
  console.log('listening on port 3000');
});
