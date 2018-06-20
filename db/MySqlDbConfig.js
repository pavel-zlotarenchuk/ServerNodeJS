var mysql = require('mysql');

var state = {
	db: null
}

exports.connect = function (done){
	if (state.db){
		return done()
	}

    var connection = mysql.createConnection({
        host     : 'localhost',
        port     : '3306',
        user     : 'root',
        password : 'qweqwe123123',
        database : 'myapi'
    });
		state.db = connection
		done()
}

exports.get = function (){
    return state.db;
}