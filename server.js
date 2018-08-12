var express = require('express')
var bodyParser = require('body-parser')
var constants = require('./constants')

var artistsController = require('./controllers/dbController')

var app = express();
var db = require(`./db/${constants.dataBase}Config`)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get(constants.baseApi + '/', function (req, res) {
	res.send('Hello node.js');
})

//GET
app.get(constants.baseApi + '/:table', artistsController.getAll)

app.get(constants.baseApi + '/:table/:id', artistsController.findById)

//POST
app.post(constants.baseApi + '/add/:table/:name', artistsController.create)

//PUT
app.put(constants.baseApi + '/update/:table/:id/:newValue', artistsController.update)

//DELETE
app.delete(constants.baseApi + '/delete/:table/:id', artistsController.delete)

//Login


//For MongoDB: ('mongodb://localhost:27017/myapi', function (error){...
//For MySQL: (function (error){...
db.connect('mongodb://localhost:27017/myapi', function (error){
	if (error){
		return console.log(error)
	}

	app.listen(constants.port, function (){
		console.log('API app started on %s', constants.port);
	})
})