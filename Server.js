var express = require('express')
var bodyParser = require('body-parser')

var app = express();
var db = require('./db/MySqlDbConfig')
var artistsController = require('./controllers/Artists')

const port = 3012

var baseApi = "/api"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get(baseApi + '/', function (req, res) {
	res.send('Hello node.js');
})

//GET
app.get(baseApi + '/:table', artistsController.getAll)

app.get(baseApi + '/:table/:id', artistsController.findById)

//POST
app.post(baseApi + '/:table/add/:name', artistsController.create)

//PUT
app.put(baseApi + '/:table/update/:id/:newName', artistsController.update)

//DELETE
app.delete(baseApi + '/:table/delete/:id', artistsController.delete)

db.connect(function (error){
	if (error){
		return console.log(error)
	}

	app.listen(port, function (){
		console.log('API app started on %s', port);
	})
})