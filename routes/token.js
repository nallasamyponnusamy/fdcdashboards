var express = require('express');
var request = require('request');
var MultiKeyCache = require('multi-key-cache')

var multiKeyCache = new MultiKeyCache()
var router = express.Router()



router.get('/group/:gid/report/:rid', function(req, res, next) {


if(multiKeyCache.has(['embedToken',req.params.gid,req.params.rid])) {

	var embedTokenResponse = multiKeyCache.get(['embedToken',req.params.gid,req.params.rid])
	//console.log("Found cache"+embedTokenResponse)
	var currentTime = Date.now();
    var expiration = Date.parse(JSON.parse(embedTokenResponse).expiration);
    var timeout = expiration - currentTime - 10*60*1000;

 	if (timeout>0) {
 		console.log("Sending reponse from cache")
 		res.send(embedTokenResponse);
 	}
 	else {
 		console.log("Cache exprired - Getting New token")
 		getNewToken(req.params.gid,req.params.rid,res)
 	}

}
else {
	console.log("Cache not found - Getting New token")
	getNewToken(req.params.gid,req.params.rid,res)
 }
  
});

function getNewToken(groupId,reportId,res) {
	var requestBody = 'grant_type=password&client_id='+process.env.CLIENTID+'&username='+process.env.PBIUSERNAME+'&password='+process.env.PBIPASSWORD+'&resource=https://analysis.windows.net/powerbi/api'
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
		var embedTokenbody = "{\"accessLevel\": \"View\"}"
		request({
		    url: "https://api.powerbi.com/v1.0/myorg/groups/"+groupId+"/reports/"+reportId+"/GenerateToken",
		    method: "POST",
		    headers: {
		        "content-type": "application/json",
		        "Authorization": "Bearer "+JSON.parse(response.body).access_token
		    },
		    body: embedTokenbody
		}, function (error, response, body){
				if(!error) {
					multiKeyCache.set(['embedToken',groupId,reportId],response.body)
					//multiKeyCache.delete(['embedToken',groupId,reportId])
					//console.log("Sending reponse from new"+response.body)
		    		res.send(response.body);
		    	}
			});
	}
    
	});
}

module.exports = router;
