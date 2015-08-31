var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('Persons', ['Persons']);

var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/persons', function(req, res){
	console.log('I received get request');

	db.Persons.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	})
});

//app.use(express.static(__dirname + "/app/views"));
app.listen(3000);
console.log("server running on port 3000");