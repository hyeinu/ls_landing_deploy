var express = require('express');
var path = require('path');
var app = express();

var path = __dirname + '/';
var PORT = process.env.PORT || 3000;;

app.use(express.static(path));

app.listen(PORT);
