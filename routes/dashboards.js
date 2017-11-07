var express = require('express');
var exphbs  = require('express-handlebars');
var session = require('express-session')

var reportList = require('./reportList')

var router = express.Router()


router.get('/', function (req, res, next) {
	res.redirect('/dashboards/pts')
});

router.get('/pts', function (req, res, next) {
	res.render('pts',{userName:req.session.userName});
});

router.get('/rtr', function (req, res, next) {
	res.render('pts',{userName:req.session.userName});
});

router.get('/mtc', function (req, res, next) {
	res.render('pts',{userName:req.session.userName});
});

router.get('/dtp', function (req, res, next) {
	res.render('pts',{userName:req.session.userName});
});

router.get('/report/:reportName/:pageName', function (req, res, next) {

console.log(req.params.reportName+req.params.pageName)
	if(reportList[req.params.reportName][req.params.pageName]) {
				res.render('report',{
    					userName:req.session.userName,
    					reportName:req.session.reportName,
    					gid:'b1717488-1ca0-4f42-8da3-1fc7c1363833',
    					rid:reportList[req.params.reportName][req.params.pageName].rid,
    					activePage:req.params.pageName,
    					pageList:reportList[req.params.reportName]
    				});
			}
			else res.render("error",{errorMsg:'Report Name/Page not found'})
    
});

router.get(function(req,res,next){
	res.render("error",{errorMsg:'No report specified'})
})


module.exports = router;
