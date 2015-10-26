//mongodb commands: http://howtonode.org/node-js-and-mongodb-getting-started-with-mongojs
//http://docs.mongodb.org/manual/reference/mongo-shell/

//Configure routing, and break this app.js in different node routes
//http://expressjs.com/guide/routing.html

//Routing help: https://codeforgeek.com/2015/05/expressjs-router-tutorial/
//See at the bottom

//References: https://github.com/mafintosh/mongojs
//Some more references

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var collections = ['Persons']
//databaseURI = "mongodb://mongotest:mongotest@ds048368.mongolab.com:48368/MongoLab-3";
databaseURI = process.env.PERSON_MONGOLAB_CONNECTION;
//databaseURI = "mongodb://MongoLab-3:ojLtYaTSeM.6Ywk2BDxCO8.qq1KpeyMMLklH4_mVg2s-@ds048368.mongolab.com:48368/MongoLab-3";

var db = mongojs(databaseURI, collections, {authMechanism: 'ScramSHA1'});

var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/persons', function(req, res){
	console.log('Received find all persons request');
	db.Persons.find(function(err, docs){
		if(err){
			console.log(err); throw err;
		} else
		{
			console.log(docs);
			res.json(docs);
		}
	});
});

app.get('/person/:id', function(req, res){
	console.log('Received findOne person request');
	
	db.Persons.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
		if(err){
			console.log(err); throw err;
		} else
		{
			console.log(docs);
			res.json(docs);
		}
	})
});

app.post('/addPerson', function(req, res){
	console.log(req.body);
	db.Persons.insert(req.body, function(docs){
		console.log(docs);
		res.json(docs);
	})
});

app.delete('/deletePerson/:id', function(req, res){
	console.log("Received delete one person request...");
	db.Persons.remove({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.put('/updatePerson', function(req, res){
	console.log("Received updatePerson request");
	db.Persons.findAndModify({query: {"_id": new mongojs.ObjectId(req.body._id)}, 
										update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}}
										}, function(err, docs){
											console.log(docs);
											res.json(docs);
										})
	});


app.get('/addresses/:id', function(req, res){
	console.log('Received findOne person addresses request');
	console.log(req.params.id);
	db.Persons.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
		console.log(docs.addresses);
		res.json(docs);
	})
});

app.listen(3000);
console.log("server running on port 3000");