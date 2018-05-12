var objectId = require('mongodb').ObjectID
var db = require('../db')

exports.all = function (cb){
	db.get().collection('artists').find().toArray(function (error, docs){
		cb(error, docs)
	})
}

exports.findById = function (id, cb){
	db.get().collection('artists').findOne({_id: objectId(id)}, function (error, doc){
		cb(error, doc)
	})
}

exports.create = function (artist, cb){
	db.get().collection('artists').insert(artist, function (error, result){
		cb(error, result)
	})
}

exports.update = function (id, newValue, cb){
	db.get().collection('artists').updateOne(
		{_id: objectId(id)},
		newValue,
		function (error, result){
		cb(error, result)
	})
}

exports.delete = function (id, cb){
	db.get().collection('artists').deleteOne(
		{_id: objectId(id)},
		function (error, result){
		cb(error, result)  
	})
}
