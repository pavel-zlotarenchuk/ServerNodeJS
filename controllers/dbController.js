var constants = require('../constants')

var dbHelper = require(`../db/${constants.dataBase}Helper`)

exports.getAll = function (req, res){
	dbHelper.getAll(req.params.table, function (error, docs){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
		res.send(docs)
	})
}

exports.findById = function (req, res){
	dbHelper.findById(req.params.table, req.params.id, function (error, doc){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
		res.send(doc) 
	})
}

exports.create = function (req, res){
	var artist = {
		name: req.params.name
	}
	dbHelper.create(req.params.table, artist, function (error, result){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
	res.send(200)
	})
}

exports.update = function (req, res){
    var artist = {
        name: req.params.newValue
    }
	dbHelper.update(req.params.table, req.params.id, artist, function (error, result){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
	res.send(200)
	})
}

exports.delete = function (req, res){
	dbHelper.delete(req.params.table, req.params.id, function (error, result){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
	res.send(200)
	})
}