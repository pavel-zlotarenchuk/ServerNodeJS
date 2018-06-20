var db = require('../MySqlDbConfig')

exports.all = function (table, cb){
    var sql = 'SELECT * FROM ' + table
    console.log(sql)
    db.get().query(sql, function(error, result, fields){
        cb(error, result)
    });
}

exports.findById = function (table, id, cb){
    db.get().query('SELECT * FROM ' + table + ' WHERE _id = ?', id, function(error, result, fields){
        cb(error, result)
    });
}

exports.create = function (table, artist, cb){
    db.get().query('INSERT INTO ' + table + ' SET ?', artist, function(error, result){
        cb(error, result)
    });
}

exports.update = function (table, id, artist, cb){
    db.get().query('UPDATE ' + table + ' SET ? WHERE _id = ?', [artist, id], function(error, result){
        cb(error, result)
    });
}

exports.delete = function (table, id, cb){
    db.get().query('DELETE FROM ' + table + ' WHERE _id = ?', id, function(error, result){
        cb(error, result)
    });
}
