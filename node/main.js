const express 	= require('express');
const octokit 	= require('@octokit/rest')()
const fs 		= require('fs');

const app = express();


// To get organization summary
octokit.orgs.get({
  org: 'ethereum'
}).then(({data}) => {
  //console.log(data)
  console.log(data['id']);
  console.log(data['blog']);
  console.log(data['public_repos']);
})


var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Listening at http://%s:%s", host, port);
})

// To get all repos for organization
// octokit.repos.getForOrg({
//   org: 'ethereum',
//   type: 'public'
// }).then(({data}) => {
//  console.log(data)
// })