var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.listen(process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: true}));

