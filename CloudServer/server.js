var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({
	limit: '524288000',
	strict: false
}));

const cors = require('cors')
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

global.__basedir = __dirname;

require('./app/route/index.js')(app);

// Create a Server
var server = app.listen(3000, function () {

	let host = server.address().address
	let port = server.address().port

	console.log("App listening at http://%s:%s", host, port);
})