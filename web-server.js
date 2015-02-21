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

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('index.html', { root: __dirname + '/app' });
});

