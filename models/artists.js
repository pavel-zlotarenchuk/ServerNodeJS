var db = require('../db')

exports.all = function (cb){
    db.get().query('SELECT * FROM artists', function(error, result, fields){
        cb(error, result)
    });
}

exports.findById = function (id, cb){
    db.get().query('SELECT * FROM artists WHERE _id = ?', id, function(error, result, fields){
        cb(error, result)
    });
}

exports.create = function (artist, cb){
    db.get().query('INSERT INTO artists SET ?', artist , function(error, result){
        cb(error, result)
    });
}

exports.update = function (id, newValue, cb){
    db.get().query('UPDATE artists SET `name`= ? WHERE _id = ?', [newValue, id], function(error, result){
        cb(error, result)
    });
}

exports.delete = function (id, cb){
    db.get().query('DELETE FROM artists WHERE _id = ?', id, function(error, result){
        cb(error, result)
    });
}
