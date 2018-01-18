var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId: {type: String, required: true},
    userName: {type: String, required: true, maxlength: 50},
    userAddress: {type: String, required: true, maxlength: 100},
    nameOnCard: {type: String, required: true, maxlength: 100},
    cardNumber: {type: Number, required: true, maxlength: 16},
    expiryMonth: {type: Number, required: true, maxlength: 02},
    expiryYear: {type: Number, required: true, maxlength: 04},
    securityCode: {type: Number, required: true, maxlength: 04},
    amount: {type: Number, required: true}
});

module.exports = mongoose.model('Cart', schema);