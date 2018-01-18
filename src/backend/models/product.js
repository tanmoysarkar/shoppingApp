var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    name: {type: String, required: true, maxlength: 20},
    description: {type: String, required: true, maxlength: 100},
    price: {type: Number, required: true},
    count: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);