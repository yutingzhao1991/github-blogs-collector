GITHUB-BLOGS 收集GITHUB上的博客
===

自动收集GITHUB上的博客（包括使用ISSUES的和Github-pages的），**watching [github-blogs-weekly](https://github.com/yutingzhao1991/github-blogs-weekly) 就可以获得定期推送**，当前的推送方式是每周日会新建一个[ISSUE](https://github.com/yutingzhao1991/github-blogs-weekly/labels/Articles)将之前一周的更新博客整理到一起。

建议watching [github-blogs-weekly](https://github.com/yutingzhao1991/github-blogs-weekly) 获取博客更新，保证能够获取到更新的同时减少干扰。如果你对某个博客感兴趣，建议star以鼓励作者。

收集和更新规则
---

- repo名称为blog
- `config.js`的ignoreRepos中的列表会被过滤，extRepos中的列表会被额外补充上，欢迎提pr修改
- star >= 5
- 列表不定期手动更新
- 作者为本人（可以通过修改配置中的orgRepos忽略该条件）的且字数大于200的ISSUE会被加入推送列表中
- _posts文件夹（基于Github pages + jekyll搭建的博客的默认博客目录）下的md文件也会加入到推送列表中
- 每周日早晨会自动将之前一周的博客整理为一个issue自动发布到本项目中，因为github api的限制，这Github Pages类的更新是通过文件名来推算更新日期的，ISSUE类的更新时间是按照ISSUE的创建时间

如何贡献代码
---

如果需要更新博客列表或者是修改`config.js`中的配置来添加博客那么请将你的分支checkout到本地然后按照如下步骤执行build操作：
```shell
npm install
npm run build -- yourgithubname yourgithubpassword
```
用户名和密码是用来请求github的api的，不会泄露。
build完成之后`readme.md`和`blogs.json`会有更新，一起提交pr即可。

如果是要对本项目的功能进行修改，那么可以直接提Issue或者到现有的[Todolist](https://github.com/yutingzhao1991/github-blogs-collector/issues/1)中去认领。

博客列表
---

{BLOGS_LIST}

License
---

ISC