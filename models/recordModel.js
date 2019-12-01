var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordSchema = new Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number]
});


var Record = module.exports = mongoose.model('record', recordSchema);

module.exports.get = function (callback, limit) {
    Record.find(callback).limit(limit);
}