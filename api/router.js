var express = require('express');
var router = express.Router();

router.get('/api', function(req, res){
	//res.render('index', {user: 'tammy'})
	console.log("user requested home");
})


module.exports = router