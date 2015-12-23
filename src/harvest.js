'use strict';

// 自动抓取新增的博客，并通过issue的形式发布。
// 抓取时间默认范围为上周创建。
// Usage: node harvest.js githubusername githubpassword [1] [start_date] [end_date] .

var request = require('sync-request')
var moment = require('moment')
var fs = require('fs')
var _ = require('underscore')
var config = require('../config')
var blogList = require('../blogs.json')

if (process.argv.length < 4) {
  console.log(process.argv)
  console.error('Not find username and password, use with :" node harvest.js username password".')
  process.exit(1)
}

var username = process.argv[2]
var password = process.argv[3]


console.log('start harvest ...')
harvest()
console.log('done!')

function harvest() {
  var issues = getIssuesFromRepo(blogList)
  // process.argv[4] == '1' 是会创建一个issue，否则只会写到本地
  generateNewBlogs(issues, process.argv[4] == '1')
}

function getIssuesFromRepo(blogList) {
  // 抓取ISSUES
  var orgReposIndex = _.indexBy(config.orgRepos)
  
  var newIssues = []
  // 收割上一周的博客
  var startDate = process.argv[5] || moment().add(-1, 'weeks').startOf('week').format('YYYY-MM-DD')
  var endDate = process.argv[6] || moment().add(-1, 'weeks').endOf('week').format('YYYY-MM-DD')
  console.log('get blog which post in ' + startDate + ' - ' + endDate)

  for (var index = 0; index < blogList.length; index++) {
    var repo = blogList[index].full_name
    console.log('Start get issues from repo: ' + repo + ' ...')
    var url = 'https://api.github.com/repos/' + repo + '/issues?sort=created&direction=desc'
    var res = request('GET', url, {
      headers: {
        'authorization': 'Basic ' + new Buffer(username + ':' + password, 'ascii').toString('base64'),
        'user-agent': config.requestUserAgent
      }
    })
    var data = JSON.parse(res.getBody())
    for (var i = 0; i < data.length; i ++) {
      var item = data[i]
      var createdDate = moment(item.created_at).format('YYYY-MM-DD')
      if (createdDate <= endDate
        && createdDate >= startDate
        && item.body.length > 200) {
        // New one which post at yesterday.
        if (orgReposIndex[repo] || item.user.login == repo.split('/')[0]) {
          // 为公共repo或者作者本人发布的则加入到推送列表中
          console.log('get a article: ' + item.title)
          newIssues.push(item)
        }
      } else if (createdDate < startDate) {
        // Too old.
        break
      }
    }
  }
  return newIssues
}

function generateNewBlogs(newIssues, creatIssue) {
  if (newIssues.length == 0) {
    console.log('notfind new articles')
    return
  }
  var template = '' + fs.readFileSync(__dirname + '/new.md')
  var date = startDate + ' - ' + endDate
  var md = _.template(template)({
    items: newIssues,
    date: date
  })
  fs.writeFileSync(__dirname + '/../news/' + date + '.md', md)
  if (!creatIssue) {
    return
  }
  // Publish new blogs as a issue.
  console.log('Publish new article to your issue.')
  var url = 'https://api.github.com/repos/' + username + '/' + config.weeklyReminderName+ '/issues'
  request('POST', url, {
    json: {
      title: '文章更新 [ ' + date + ' ]',
      body: md,
      labels: [config.reminderIssuesLabel]
    },
    headers: {
      'authorization': 'Basic ' + new Buffer(username + ':' + password, 'ascii').toString('base64'),
      'user-agent': config.requestUserAgent
    }
  })
  console.log('Created issue done!')
}