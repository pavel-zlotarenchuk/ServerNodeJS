var objectId = require('mongodb').ObjectID
var db = require('./mongoDBConfig')

exports.getAll = function (table, cb) {
    db.get().collection(table).find().toArray(function (error, docs) {
        cb(error, docs)
    })
}

exports.findById = function (table, id, cb) {
    db.get().collection(table).findOne({_id: objectId(id)}, function (error, doc) {
        cb(error, doc)
    })
}

exports.create = function (table, object, cb) {
    db.get().collection(table).insert(object, function (error, result) {
        cb(error, result)
    })
}

exports.update = function (table, id, newObject, cb) {
    db.get().collection(table).updateOne(
        {_id: objectId(id)},
        {$set: newObject},
        function (error, result) {
            cb(error, result)
        })
}

exports.delete = function (table, id, cb) {
    db.get().collection(table).deleteOne(
        {_id: objectId(id)},
        function (error, result) {
            cb(error, result)
        })
}