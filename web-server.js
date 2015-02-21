//var express = require('express');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//
//var app = express();
//
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'app')));
//
//
//app.set('port', process.env.PORT || 7000);
//
//app.listen(app.get('port'), function() {
//    console.log('Express server listening on port ' + app.get('port'));
//});
//
//// express.static() first...
//app.use(express.static(__dirname+'/app'));
//// ...followed by your catch-all route (only one needed)
//app.get('*', function(req, res) {
//    res.render('app/index.html');
//});
//app.get('/*', function(req, res) {
//    res.render('app/index.html');
//});

var express = require('express');
//var path = require('path');
var app = express();

// Use port 7000
app.set('port', process.env.PORT || 7000);

// Use the root as the app directory
app.use('/', express.static(__dirname + '/app'));

// Listen on the given port for requests
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

// Make sure the app redirects to the same place
//app.get('/*', function(req, res) {
//    res.sendfile(path.join(__dirname, 'app', 'index.html'));
//});

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('index.html', { root: __dirname + '/app' });
});

