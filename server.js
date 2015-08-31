var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('persons', ['Persons']);

app.use(express.static(__dirname));

app.get('/persons', function(req, res){
	console.log('I received get request');

	db.Persons.find(function(err, data){
		console.log(data);
		res.json(data);
	})
});

//app.use(express.static(__dirname + "/app/views"));
app.listen(3000);
console.log("server running on port 3000");