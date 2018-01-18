var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	name : {type: String, require: true, maxlength: 50},
	email: {type: String, require: true, maxlength: 100},
	password: {type: String, require: true, maxlength: 100}
});

module.exports = mongoose.model('User', userSchema);


