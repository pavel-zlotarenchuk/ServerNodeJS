var express = require('express')
var bodyParser = require('body-parser')
var mongoClient = require('mongodb').MongoClient
var objectId = require('mongodb').ObjectID

var app = express();
var db = require('./db')
var artistsController = require('./controllers/artists')

var baseApi = "/api"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//GET
app.get(baseApi + '/', function (req, res) {
	res.send('Hello node.js');
})

app.get(baseApi + '/artists', artistsController.all)

app.get(baseApi + '/artists/:id', artistsController.findById)

//POST
app.post(baseApi + '/artists/add/:name', artistsController.create)

//PUT
app.put(baseApi + '/artists/update/:id/:newName', artistsController.update)

//DELETE
app.delete(baseApi + '/artists/:id', artistsController.delete)

db.connect('mongodb://localhost:27017/myapi', function (error){
	if (error){
		return console.log('error')
	}

	app.listen(3012, function (){
		console.log('API app started');
	})
})