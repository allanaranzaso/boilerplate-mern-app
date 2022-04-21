var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')

/**
 * Add the routes by requiring them
 * ts modules are found in ./dist/**.ts
 * js modules are found in ./routes/**.js
 */
var indexRouter = require('./dist/index');
var usersRouter = require('./dist/users');
var testAPIRouter = require('./routes/testApi');

var app = express(); // start instance of express


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * This tells Express where the files to be served are located
 */
app.use(express.static(path.join(__dirname, '../client/build')));

/**
 * Create the endpoints to be utilized by adding like the below routes
 * 1st param - the endpoint to use
 * 2nd param - the module to use for that endpoint
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
