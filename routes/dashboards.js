var express = require('express');
var exphbs  = require('express-handlebars');
var session = require('express-session')
var router = express.Router()


router.get('/', function (req, res, next) {
    res.render('pts');
});

router.get('/pts', function (req, res, next) {
    res.render('pts');
});

router.get('/buffermonitor', function (req, res, next) {
    res.render('buffermonitor');
});


module.exports = router;
