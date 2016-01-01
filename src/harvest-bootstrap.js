'use strict';

// 启动收割
// 抓取时间默认范围为上周创建。
// Usage: node harvest-bootstrap.js githubusername githubpassword type

var moment = require('moment')
var config = require('../config')

if (process.argv.length < 5) {
  console.log(process.argv)
  console.error('Lack argvs.')
  process.exit(1)
}

var username = process.argv[2]
var password = process.argv[3]
// 要将更新发布的repo名称 更新会以创建一个issue的方式发布
var type = process.argv[4]
var startDate, endDate, publishRepo

if (type == 'daily') {
  publishRepo = config.dailyReminderName
  startDate = endDate = moment().add(-1, 'days').format('YYYY-MM-DD')
} else {
  // weekly
  publishRepo = config.weeklyReminderName
  startDate = moment().add(-1, 'weeks').startOf('week').format('YYYY-MM-DD')
  endDate = moment().add(-1, 'weeks').endOf('week').format('YYYY-MM-DD')
}

var spawn = require('child_process').spawn,
  cmd   = spawn('node', [__dirname + '/harvest.js', username, password, startDate, endDate, publishRepo])

cmd.stdout.on('data', function (data) {
  console.log('stdout: ' + data)
})

cmd.stderr.on('data', function (data) {
  console.log('stderr: ' + data)
})

cmd.on('close', function (code) {
  console.log('harvest child process exited with code ' + code)
})