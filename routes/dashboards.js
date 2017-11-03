var express = require('express');
var exphbs  = require('express-handlebars');
var router = express.Router()

router.get('/pts', function (req, res, next) {
    res.render('pts', {layout: false});
});

router.get('/buffermonitor', function (req, res, next) {
    res.render('buffermonitor', {layout: false});
});


module.exports = router;
