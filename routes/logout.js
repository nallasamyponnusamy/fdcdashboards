var express = require('express');
var exphbs  = require('express-handlebars');
var router = express.Router()


router.use(function(req,res,next) {
  req.session.destroy()
  res.redirect('/login')
 
});

module.exports = router;