var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var temporal = require('temporal')

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/sleep/:seconds', function (req, res) {
    temporal.delay(parseInt(req.params.seconds), function() {
        res.json(req.body);
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
