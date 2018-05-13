var Artists = require('../models/artists')

exports.all = function (req, res){
	Artists.all(function (error, docs){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
		res.send(docs)
	})
}

exports.findById = function (req, res){
	Artists.findById(req.params.id, function (error, doc){
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
	Artists.create(artist, function (error, result){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
	res.send(200)
	})
}

exports.update = function (req, res){
	Artists.update(req.params.id, req.params.newName, function (error, result){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
	res.send(200)
	})
}

exports.delete = function (req, res){
	Artists.delete(req.params.id, function (error, result){
		if (error){
			console.log(error)
			return res.sendStatus(500)
		}
	res.send(200)
	})
}