var path = require('path');
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/frontend'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
})

app.listen(port, function() {
  console.log('listening on port' + port);
});
