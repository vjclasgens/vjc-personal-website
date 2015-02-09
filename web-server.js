var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 7000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

// express.static() first...
app.use(express.static(__dirname+'/app'));
// ...followed by your catch-all route (only one needed)
app.get('*', function(req, res) {
    res.render('app/index.html');
});
app.get('/*', function(req, res) {
    res.render('app/index.html');
});

