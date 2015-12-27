'use strict';

var sleep = require('sleep')

// github 搜索的请求限制是每分钟30次，为了保证不超过限制，每次请求都延迟2s
exports.apiRequestSleep = function(s) {
  sleep.sleep(s || 2)
}