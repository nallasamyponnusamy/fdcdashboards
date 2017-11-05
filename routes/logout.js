var express = require('express');
var exphbs  = require('express-handlebars');
var router = express.Router()


router.use(function(req,res,next) {
  req.session.destroy()
  res.redirect('https://login.windows.net/common/oauth2/logout?post_logout_redirect_uri='+process.env.REDIRECTURI)
 
});

module.exports = router;