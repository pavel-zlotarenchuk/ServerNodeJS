var db = require('../db')

exports.all = function (table, cb){
    db.get().query('SELECT * FROM ?', table, function(error, result, fields){
        cb(error, result)
    });
}

exports.findById = function (table, id, cb){
    db.get().query('SELECT * FROM ? WHERE _id = ?', [table, id], function(error, result, fields){
        cb(error, result)
    });
}

exports.create = function (table, artist, cb){
    db.get().query('INSERT INTO ? SET ?', [table, artist], function(error, result){
        cb(error, result)
    });
}

exports.update = function (table, id, newValue, cb){
    db.get().query('UPDATE ? SET `name`= ? WHERE _id = ?', [table, newValue, id], function(error, result){
        cb(error, result)
    });
}

exports.delete = function (table, id, cb){
    db.get().query('DELETE FROM ? WHERE _id = ?', [table, id], function(error, result){
        cb(error, result)
    });
}
