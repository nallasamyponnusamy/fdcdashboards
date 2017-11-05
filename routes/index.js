var express = require('express');
var exphbs  = require('express-handlebars');
var router = express.Router()

router.get('/', function (req, res, next) {
    res.redirect('/dashboards');
});


module.exports = router;