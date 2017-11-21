var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var session = require('express-session')
var compression = require('compression')

//Azure application insights
const appInsights = require('applicationinsights');
appInsights.setup('77e65bd5-272f-4561-9a8c-a7ef4ebbaf26').start();

//var index = require('./routes/index');

var api = require('./routes/api');
var dashboards = require('./routes/dashboards');
var index = require('./routes/index');
var login = require('./routes/login');
var logout = require('./routes/logout');


var app = express();
app.use(compression())
// view engine setup
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

//check session
app.use('/login', login)
app.use(function(req,res,next) {
 if (!req.session.pbisession && req.url!="/login" && req.url!="/login/token")
 	res.redirect('/login?state='+req.originalUrl)
  else 
  	next()
});

app.use('/logout', logout)
app.use('/api', api)
app.use('/dashboards', dashboards)
app.use('/', index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
