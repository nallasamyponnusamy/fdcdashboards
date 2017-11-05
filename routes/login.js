var express = require('express');
var request = require('request');
var exphbs  = require('express-handlebars');
var router = express.Router()


router.use(function(req,res,next) {
 if (req.session.pbisession) {
  		console.log("session  found")
		res.redirect('/dashboards')
  	}
  else next()
});


router.get('/', function (req, res, next) {
	res.redirect('https://login.microsoftonline.com/freshdirect.onmicrosoft.com/oauth2/authorize?client_id='+process.env.CLIENTID+'&response_type=code&redirect_uri='+process.env.REDIRECTURI+'&response_mode=query&state=12345')
});

router.get('/token', function (req, res, next) {

	//console.log("got the code"+req.query.code)
	if(!req.query.code) req.render('error')	

	var requestBody = 'grant_type=authorization_code&client_id='+process.env.CLIENTID+'&code='+req.query.code+'&redirect_uri='+process.env.REDIRECTURI+'&resource=https://graph.windows.net'
	//res.send(requestBody)
	request({
	    url: "https://login.microsoftonline.com/freshdirect.onmicrosoft.com/oauth2/token",
	    method: "POST",
	    headers: {
	        "content-type": "application/x-www-form-urlencoded",  // 
	    },
	    body: requestBody
	}, function (error, response, body){
	if(!error) {
	//	console.log("got the access token....." +JSON.parse(response.body).access_token)
		request({
		    url: "https://graph.windows.net/freshdirect.onmicrosoft.com/me?api-version=1.6",
		    method: "GET",
		    headers: {
		        "content-type": "application/json",
		        "Authorization": "Bearer "+JSON.parse(response.body).access_token
		    }
		},function (error, response, body){
				if(!error) {
					if(JSON.parse(response.body).objectId)
						req.session.pbisession=JSON.parse(response.body).objectId
						req.session.userName=JSON.parse(response.body).displayName
					res.redirect("/")
		    	}
		    	else res.render("error")
			});
	}
	else res.render('error')
	});
});



module.exports = router;