var express = require('express');
var request = require('request');
var exphbs  = require('express-handlebars');
var router = express.Router()


router.use(function(req,res,next) {
 if (req.session.pbisession)
 	if(req.query.state)
		res.redirect(req.query.state)
	else
		res.redirect('/dashboards')
  else next()
});


router.get('/', function (req, res, next) {
	if(req.query.state)
		res.redirect('https://login.microsoftonline.com/freshdirect.onmicrosoft.com/oauth2/authorize?client_id='+process.env.CLIENTID+'&response_type=code&redirect_uri='+process.env.REDIRECTURI+'&response_mode=query&state='+req.query.state)
	else
		res.redirect('https://login.microsoftonline.com/freshdirect.onmicrosoft.com/oauth2/authorize?client_id='+process.env.CLIENTID+'&response_type=code&redirect_uri='+process.env.REDIRECTURI+'&response_mode=query&state='+'/dashboards')	
});

router.get('/token', function (req, res, next) {

	if(!req.query.code) 
		res.redirect("login")	
	else {
	var requestBody = 'grant_type=authorization_code&client_id='+process.env.CLIENTID+'&code='+req.query.code+'&redirect_uri='+process.env.REDIRECTURI+'&resource=https://graph.windows.net'
	
	//console.log(requestBody)
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
					res.redirect("/?state="+req.query.state)
		    	}
		    	else res.redirect("login")
			});
	}
	else res.redirect("login")
	});
}
});



module.exports = router;