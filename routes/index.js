var express = require('express');
var exphbs  = require('express-handlebars');
var router = express.Router()

router.get('/', function (req, res, next) {
	if(req.query.state)
    	res.redirect(req.query.state);
	else
		res.redirect('/dashboards');
});


module.exports = router;