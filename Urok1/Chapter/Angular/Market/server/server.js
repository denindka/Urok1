var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(__dirname + './../public'));

app.use(bodyParser.json());

require('./routes')(app);

var server = app.listen('3000', function () {
    console.log('Server is running on port', server.address().port);
});
