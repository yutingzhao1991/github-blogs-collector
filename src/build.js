'use strict';

// Query blogs detail and write to README.md
// Usage: node build.js githubusername githubpassword

var fs = require('fs')
var _ = require('underscore')
// 为了防止请求限制超过github上限，所有请求同步串行发出。同时也让代码更加简单易懂。
var request = require('sync-request')
var config = require('../config')

if (process.argv.length < 4) {
  console.log(process.argv)
  console.error('Not find username and password, use with :" node build.js username password ".')
  process.exit(1)
}

var username = process.argv[2]
var password = process.argv[3]

console.log('start build ...')
build()
console.log('done!')

function build() {
  var list = generateBlogsInfo(config.repos)
  writeResult(list)
}

function generateBlogsInfo(repos) {
  var list = []
  // 添加指定的blog的repo，从第0个开始递归添加.
  for (var i = 0; i < repos.length; i++) {
    var fullName = repos[i]
    console.log('Get detail of repo: ' + fullName)
    var url = 'https://api.github.com/repos/' + fullName
    var res = request('GET', url, {
      headers: {
        'authorization': 'Basic ' + new Buffer(username + ':' + password, 'ascii').toString('base64'),
        'User-Agent': username
      }
    })
    var data = JSON.parse(res.getBody())
    list.push(data)
  }
  return list
}

function writeResult(list) {
  // 将最后得到的blog列表写入到blog.json和readme
  var blogs = list.map(function(item) {
    return {
      full_name: item.full_name,
      open_issues_count: item.open_issues_count,
      html_url: item.html_url,
      stargazers_count: item.stargazers_count
    }
  })
  console.log('writing to readme ...')
  blogs.sort(function(a, b) {
    return b.stargazers_count - a.stargazers_count
  })
  var template = '' + fs.readFileSync(__dirname + '/list.md')
  var mdHead = '' + fs.readFileSync(__dirname + '/../_README.md')
  var md = mdHead.replace('{BLOGS_LIST}', _.template(template)({
    blogs: blogs
  }))
  fs.writeFileSync(__dirname + '/../README.md', md) 
}