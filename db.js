var mongoClient = require('mongodb').MongoClient

var state = {
	db: null
}

exports.connect = function (url, done){
	if (state.db){
		return done()
	}
	mongoClient.connect(url, function(error, client){
		if (error){
			return done(error)
		}

		state.db = client.db('myapi')
		done()
	})
}

exports.get = function (){
    return state.db;
}