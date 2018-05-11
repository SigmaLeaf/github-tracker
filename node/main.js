const octokit = require('@octokit/rest')()

// To get organization summary
octokit.orgs.get({
  org: 'ethereum'
}).then(({data}) => {
  //console.log(data)
  console.log(data['id']);
  console.log(data['blog']);
  console.log(data['public_repos']);
})

// To get all repos for organization
// octokit.repos.getForOrg({
//   org: 'ethereum',
//   type: 'public'
// }).then(({data}) => {
//  console.log(data)
// })