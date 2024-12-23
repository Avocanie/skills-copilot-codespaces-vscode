// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

// Parse URL encoded forms
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON
app.use(bodyParser.json());