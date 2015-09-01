//mongodb commands: http://howtonode.org/node-js-and-mongodb-getting-started-with-mongojs
//http://docs.mongodb.org/manual/reference/mongo-shell/

/*var databaseURI = "localhost:27017/somedb";
var collections = ["users", "blogs"];
var db = require("mongojs").connect(databaseURI, collections);

module.exports = db;

and then just require it where you need to connect to mongo like:

var db = require("./db");
*/

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('AddressBook', ['Persons']);

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

app.post('/person', function(req, res){
	console.log(res.data);
})

//app.use(express.static(__dirname + "/app/views"));
app.listen(3000);
console.log("server running on port 3000");