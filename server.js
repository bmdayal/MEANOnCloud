var express = require('express');
var app = express();

//app.use(express.static(__dirname + "/app/views"));
app.use(express.static(__dirname));
app.listen(3000);
console.log("server running on port 3000");