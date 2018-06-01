const express 	= require('express');
const octokit 	= require('@octokit/rest')()
const fs 		= require('fs');
const bodyParser= require('body-parser');

const app = express();

// Configure app to use bodyParser() to retreive data from POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Set Ports
var port = process.env.PORT || 8080; 

// Initialize Router
var router = express.Router();

// Organizations to track
const orgs = ['ethereum'];

// MIDDLEWARES
router.use(function(req, res, next){
	next();
});

// ORGANIZATIONS
// url: '127.0.0.1/api/'
router.get('/', function(req, res){
	res.json({orgs: orgs});
});

// ETHEREUM
// url: '127.0.0.1/api/ethereum'
router.route('/' + orgs[0]).get(function(req, res){
	octokit.orgs.get({
	  org: orgs[0]
	}).then(({data}) => {
		json = {org: orgs[0],
				blog: data['blog'],
				public_repos: data['public_repos']}
		res.json(json);
	})
});

app.use('/api', router);

app.listen(port);
console.log('server @ ' + port);