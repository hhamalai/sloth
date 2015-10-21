var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var temporal = require('temporal')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/sleep/:seconds', function (req, res) {
    temporal.delay(parseInt(req.params.seconds), function() {
        res.json(req.body);
    });
});

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
});
