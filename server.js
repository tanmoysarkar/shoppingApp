var express = require("express")
const http = require('http')
var cookieParser = require("cookie-parser")
var path = require("path")
var cors = require('cors')
var app = express();
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
// var MongoStore = require('connect-mongo')(session);



// require('./config/passport');

// app.use(validator());
// app.use(cookieParser());
// app.use(session({
//   secret: 'mysupersecret', 
//   resave: false, 
//   saveUninitialized: false,
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   cookie: { maxAge: 180 * 60 * 1000 }
// }));
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});


app.get('/user', function(req, res){
	console.log("api request for user login")
	let data = {
		name:'tammy',
		password:'1234'
	}
	res.json(data)
})

var API = require('./src/backend/api')
app.use('/api', API)

if( process.argv[2] === 'dev'){	
	app.use(express.static(path.join(__dirname, 'public')))
}
else{
	app.use(express.static(path.join(__dirname, 'build')))
}

const port = process.env.PORT || '8080'
app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`API running on localhost:${port}`))

module.exports = app