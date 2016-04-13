'use strict';

// 自动抓取新增的博客，并通过issue的形式发布。
// 抓取时间默认范围为上周创建。
// Usage: node harvest.js githubusername githubpassword [start_date] [end_date] [publishrepo].

var request = require('sync-request')
var moment = require('moment')
var fs = require('fs')
var _ = require('underscore')
var config = require('../config')
var blogList = config.repos

console.log('harvest with: ', process.argv)
if (process.argv.length < 6) {
  console.error('Lack argvs.')
  process.exit(1)
}

var username = process.argv[2]
var password = process.argv[3]
// 要将更新发布的repo名称 更新会以创建一个issue的方式发布
var startDate = process.argv[4]
var endDate = process.argv[5]
var publishRepo = process.argv[6]

console.log('start harvest ' + startDate + ' ' + endDate + ' blogs ...')
if (publishRepo) {
  console.log('update will be created a issue to repo: ' + publishRepo)
}
harvest()
console.log('done!')

function harvest() {
  var issues = getIssuesFromRepo(blogList)
  // process.argv[4] == '1' 是会创建一个issue，否则只会写到本地
  generateNewBlogs(issues, publishRepo)
}

function getIssuesFromRepo(blogList) {
  // 抓取ISSUES
  var orgReposIndex = _.indexBy(config.orgRepos)
  var newIssues = []
  console.log('get blog which post in ' + startDate + ' - ' + endDate)
  for (var index = 0; index < blogList.length; index++) {
    var repo = blogList[index]
    console.log('Start get issues from repo: ' + repo + ' ...')
    var url = 'https://api.github.com/repos/' + repo + '/issues?sort=created&direction=desc'
    var res = request('GET', url, {
      headers: {
        'authorization': 'Basic ' + new Buffer(username + ':' + password, 'ascii').toString('base64'),
        'User-Agent': username
      }
    })
    var data = JSON.parse(res.getBody())
    for (var i = 0; i < data.length; i ++) {
      var item = data[i]
      var createdDate = moment(item.created_at).format('YYYY-MM-DD')
      if (createdDate <= endDate
        && createdDate >= startDate
        && item.body
        && item.body.length > config.minBodyLength) {
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

function generateNewBlogs(newIssues, publishRepo) {
  if (newIssues.length == 0) {
    console.log('notfind new articles')
    return
  }
  var template = '' + fs.readFileSync(__dirname + '/new.md')
  var date
  if (startDate == endDate) {
    date = startDate
  } else {
    date  = startDate + ' - ' + endDate
  }
  var md = _.template(template)({
    items: newIssues.map(function(item) {
      return {
        title: item.title,
        url: item.html_url,
        name: item.user.login,
        overview: startDate == endDate ? generateOverview(item.body) : null // 只有daily的带上概览
      }
    }),
    date: date
  })
  fs.writeFileSync(__dirname + '/../news/' + date + '.md', md)
  if (!publishRepo) {
    return
  }
  // Publish new blogs as a issue.
  console.log('Publish new article to your issue.')
  var url = 'https://api.github.com/repos/' + username + '/' + publishRepo+ '/issues'
  request('POST', url, {
    json: {
      title: '文章更新 [ ' + date + ' ]',
      body: md,
      labels: [config.reminderIssuesLabel]
    },
    headers: {
      'authorization': 'Basic ' + new Buffer(username + ':' + password, 'ascii').toString('base64'),
      'User-Agent': username
    }
  })
  console.log('Created issue done!')
}

// 获取文章概览
function generateOverview(body) {
  var splits = body.split('\r\n')
  var ret = ''
  var i = 0
  while(ret.length < config.minBodyLength && i < splits.length) {
    ret += splits[i].replace(/#/g, '')
    i ++
  }
  return ret + '...'
}
