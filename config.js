'use strict';

module.exports = {
  'minRequiredStarCount': 5, // 收录到博客列表中的最小star数目要求
  'searchResponseMaxCount': 1000, // 自动收录博客时的最大搜索限制
  'minBodyLength': 200, // 最小字数要求，同时也是概览长度

  'weeklyReminderName': 'github-blogs-weekly', // 发布周更新的repo名称
  'dailyReminderName': 'github-blogs-daily', // 发布日更新的repo名称
  'reminderIssuesLabel': 'Articles', // 发布更新Issue时添加的label

  // 收录规则无法匹配到的repo
  'extRepos': [
    'Lucifier129/Lucifier129.github.io',
    'hax/hax.github.com',
    'amfe/article',
    'tmallfe/tmallfe.github.io',
    'baixing/FE-Blog',
    'kuitos/kuitos.github.io'
  ],
  // 开放性的repo，对该列表中的repo读取更新时会跳过"本人发布"的限制
  'orgRepos': [
    'amfe/article',
    'tmallfe/tmallfe.github.io',
    'baixing/FE-Blog'
  ],
  // 忽略的repo，过滤一些符合规则但是却不是目标的repo
  'ignoreRepos': [
    'jlongster/blog',
    'android-cn/blog',
    'Polymer/blog'
  ]
}
