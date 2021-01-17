// Dependencies

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express(); // Creates express app


// Middleware
// Below 4 Can't send response 
app.use(logger('dev')); // Logs the requests 
app.use(express.json()); // Analyzes the request body and parses it into JSON
app.use(express.urlencoded({ extended: false })); // Converts URL parameters to JSON
app.use(cookieParser()); // Parses Cookies.


// Below can send a Response
// Based on URL you can do one of the following things
// Return a file
// Execute a function and send the response.
app.use(express.static(path.join(__dirname, 'public'))); // Looks for file in directory; returns if found
app.use('/', indexRouter); // Also used for Routing 
app.use('/users', usersRouter); // If my url matches / users => Execute usersRouter.

module.exports = app;