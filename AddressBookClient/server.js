var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  console.log('Received client root request');
  response.render('index.html')
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
