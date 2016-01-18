GITHUB-BLOGS 收集GITHUB上的博客
===

**watching [github-blogs-weekly](https://github.com/yutingzhao1991/github-blogs-weekly) 就可以获得每周推送**

**watching [github-blogs-daily](https://github.com/yutingzhao1991/github-blogs-daily) 就可以获得每天推送**

自动收集GITHUB上用ISSUES写的博客，当前的推送方式是每周日会新建一个[ISSUE](https://github.com/yutingzhao1991/github-blogs-weekly/labels/Articles)将之前一周的更新博客整理到一起。

建议watching [github-blogs-weekly](https://github.com/yutingzhao1991/github-blogs-weekly) 获取博客更新，保证能够获取到更新的同时减少干扰。如果你对某个博客感兴趣，建议star以鼓励作者。

收集和更新规则
---

- repo名称为blog
- `config.js`的ignoreRepos中的列表会被过滤，extRepos中的列表会被额外补充上，欢迎提pr修改
- star >= 5
- open issue 数 >= 1
- 列表不定期手动更新
- 作者为本人（可以通过修改配置中的orgRepos忽略该条件）的且字数大于200的会每加入推送列表中
- 每周日早晨会自动将之前一周的博客整理为一个issue自动发布到本项目中

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


- [fouber/blog(9)](https://github.com/fouber/blog) ✯5992

- [amfe/article(27)](https://github.com/amfe/article) ✯2870

- [lifesinger/blog(84)](https://github.com/lifesinger/blog) ✯2735

- [xufei/blog(27)](https://github.com/xufei/blog) ✯2072

- [tmallfe/tmallfe.github.io(28)](https://github.com/tmallfe/tmallfe.github.io) ✯1713

- [cssmagic/blog(49)](https://github.com/cssmagic/blog) ✯965

- [adonaac/blog(9)](https://github.com/adonaac/blog) ✯398

- [kuitos/kuitos.github.io(31)](https://github.com/kuitos/kuitos.github.io) ✯372

- [yisibl/blog(6)](https://github.com/yisibl/blog) ✯330

- [wintercn/blog(7)](https://github.com/wintercn/blog) ✯302

- [gf-rd/blog(28)](https://github.com/gf-rd/blog) ✯289

- [livoras/blog(11)](https://github.com/livoras/blog) ✯267

- [camsong/blog(5)](https://github.com/camsong/blog) ✯261

- [hax/hax.github.com(31)](https://github.com/hax/hax.github.com) ✯178

- [atian25/blog(10)](https://github.com/atian25/blog) ✯171

- [Lucifier129/Lucifier129.github.io(8)](https://github.com/Lucifier129/Lucifier129.github.io) ✯148

- [dfguo/blog(1)](https://github.com/dfguo/blog) ✯128

- [lukego/blog(13)](https://github.com/lukego/blog) ✯115

- [fool2fish/blog(13)](https://github.com/fool2fish/blog) ✯112

- [bh-lay/blog(1)](https://github.com/bh-lay/blog) ✯112

- [chyingp/blog(29)](https://github.com/chyingp/blog) ✯109

- [nimojs/blog(13)](https://github.com/nimojs/blog) ✯103

- [msurguy/blog(1)](https://github.com/msurguy/blog) ✯91

- [riskers/blog(15)](https://github.com/riskers/blog) ✯85

- [xiangpaopao/blog(8)](https://github.com/xiangpaopao/blog) ✯83

- [ant-ued/blog(1)](https://github.com/ant-ued/blog) ✯78

- [coderyi/blog(1)](https://github.com/coderyi/blog) ✯75

- [niklasfrykholm/blog(7)](https://github.com/niklasfrykholm/blog) ✯62

- [BayesianLogic/blog(45)](https://github.com/BayesianLogic/blog) ✯60

- [hugozhu/blog(1)](https://github.com/hugozhu/blog) ✯57

- [enml/blog(2)](https://github.com/enml/blog) ✯54

- [duguying/blog(1)](https://github.com/duguying/blog) ✯54

- [tikonen/blog(1)](https://github.com/tikonen/blog) ✯52

- [classicemi/blog(13)](https://github.com/classicemi/blog) ✯51

- [jxufeliujj/blog(1)](https://github.com/jxufeliujj/blog) ✯47

- [web2hack/blog(1)](https://github.com/web2hack/blog) ✯46

- [baixing/FE-Blog(7)](https://github.com/baixing/FE-Blog) ✯46

- [ruhoh/blog(11)](https://github.com/ruhoh/blog) ✯45

- [bgolub/blog(1)](https://github.com/bgolub/blog) ✯44

- [dubuyuye/blog(1)](https://github.com/dubuyuye/blog) ✯42

- [matthew-sun/blog(19)](https://github.com/matthew-sun/blog) ✯42

- [ccjr/blog(1)](https://github.com/ccjr/blog) ✯42

- [0x00A/blog(1)](https://github.com/0x00A/blog) ✯41

- [pixelhandler/blog(1)](https://github.com/pixelhandler/blog) ✯37

- [jakubholynet/blog(2)](https://github.com/jakubholynet/blog) ✯36

- [steveklabnik/blog(1)](https://github.com/steveklabnik/blog) ✯34

- [huangz1990/blog(1)](https://github.com/huangz1990/blog) ✯33

- [ma6174/blog(17)](https://github.com/ma6174/blog) ✯33

- [LearnShare/blog(1)](https://github.com/LearnShare/blog) ✯32

- [studywolf/blog(1)](https://github.com/studywolf/blog) ✯32

- [philipwalton/blog(2)](https://github.com/philipwalton/blog) ✯28

- [ashfurrow/blog(2)](https://github.com/ashfurrow/blog) ✯28

- [wenzhixin/blog(6)](https://github.com/wenzhixin/blog) ✯28

- [ljw1004/blog(2)](https://github.com/ljw1004/blog) ✯27

- [ipfs/blog(5)](https://github.com/ipfs/blog) ✯27

- [lcxfs1991/blog(6)](https://github.com/lcxfs1991/blog) ✯27

- [imsobear/blog(48)](https://github.com/imsobear/blog) ✯26

- [28harishkumar/blog(1)](https://github.com/28harishkumar/blog) ✯26

- [huei90/blog(3)](https://github.com/huei90/blog) ✯26

- [zhaoda/blog(6)](https://github.com/zhaoda/blog) ✯23

- [duythien/blog(1)](https://github.com/duythien/blog) ✯23

- [Gaubee/blog(84)](https://github.com/Gaubee/blog) ✯23

- [mominger/blog(18)](https://github.com/mominger/blog) ✯22

- [zhouwenbin/blog(15)](https://github.com/zhouwenbin/blog) ✯21

- [GitbookIO/blog(2)](https://github.com/GitbookIO/blog) ✯21

- [YIXUNFE/blog(48)](https://github.com/YIXUNFE/blog) ✯20

- [ngot/blog(2)](https://github.com/ngot/blog) ✯20

- [siddontang/blog(11)](https://github.com/siddontang/blog) ✯19

- [lunaryorn/blog(4)](https://github.com/lunaryorn/blog) ✯19

- [nathanleclaire/blog(3)](https://github.com/nathanleclaire/blog) ✯19

- [techird/blog(2)](https://github.com/techird/blog) ✯19

- [fperez/blog(1)](https://github.com/fperez/blog) ✯18

- [aui/blog(1)](https://github.com/aui/blog) ✯18

- [dgiim/blog(43)](https://github.com/dgiim/blog) ✯18

- [alvarto/blog(6)](https://github.com/alvarto/blog) ✯18

- [fxhover/blog(1)](https://github.com/fxhover/blog) ✯17

- [yoyoyohamapi/blog(1)](https://github.com/yoyoyohamapi/blog) ✯17

- [fwon/blog(15)](https://github.com/fwon/blog) ✯17

- [linxz/blog(2)](https://github.com/linxz/blog) ✯15

- [zwhu/blog(20)](https://github.com/zwhu/blog) ✯15

- [woto/blog(2)](https://github.com/woto/blog) ✯14

- [kerryChen95/blog(8)](https://github.com/kerryChen95/blog) ✯14

- [substack/blog(6)](https://github.com/substack/blog) ✯14

- [thoughtram/blog(16)](https://github.com/thoughtram/blog) ✯14

- [confidence68/blog(180)](https://github.com/confidence68/blog) ✯13

- [Pearyman/blog(3)](https://github.com/Pearyman/blog) ✯13

- [pivotal/blog(9)](https://github.com/pivotal/blog) ✯12

- [auth0/blog(4)](https://github.com/auth0/blog) ✯12

- [pivotal/blog(9)](https://github.com/pivotal/blog) ✯12

- [auth0/blog(4)](https://github.com/auth0/blog) ✯12

- [Hiufan/blog(19)](https://github.com/Hiufan/blog) ✯12

- [serverfireteam/blog(5)](https://github.com/serverfireteam/blog) ✯12

- [fredshare/blog(22)](https://github.com/fredshare/blog) ✯12

- [divarvel/blog(1)](https://github.com/divarvel/blog) ✯11

- [phatak-dev/blog(2)](https://github.com/phatak-dev/blog) ✯11

- [chunpu/blog(68)](https://github.com/chunpu/blog) ✯11

- [Tikitoo/blog(16)](https://github.com/Tikitoo/blog) ✯11

- [pimcore-extensions/blog(3)](https://github.com/pimcore-extensions/blog) ✯11

- [arogulin/blog(10)](https://github.com/arogulin/blog) ✯11

- [strikingly/blog(21)](https://github.com/strikingly/blog) ✯11

- [jeffknupp/blog(1)](https://github.com/jeffknupp/blog) ✯11

- [yutingzhao1991/blog(4)](https://github.com/yutingzhao1991/blog) ✯10

- [ecomfe/blog(3)](https://github.com/ecomfe/blog) ✯10

- [tarekziade/blog(1)](https://github.com/tarekziade/blog) ✯10

- [yikebocai/blog(40)](https://github.com/yikebocai/blog) ✯10

- [yegor256/blog(1)](https://github.com/yegor256/blog) ✯10

- [melonHuang/blog(2)](https://github.com/melonHuang/blog) ✯10

- [LingyuCoder/blog(1)](https://github.com/LingyuCoder/blog) ✯9

- [haskellbr/blog(3)](https://github.com/haskellbr/blog) ✯8

- [iocanel/blog(1)](https://github.com/iocanel/blog) ✯8

- [TazeTSchnitzel/blog(2)](https://github.com/TazeTSchnitzel/blog) ✯8

- [luqin/blog(12)](https://github.com/luqin/blog) ✯7

- [fightteam/blog(1)](https://github.com/fightteam/blog) ✯7

- [amilna/blog(3)](https://github.com/amilna/blog) ✯7

- [Enome/blog(4)](https://github.com/Enome/blog) ✯7

- [bholst/blog(6)](https://github.com/bholst/blog) ✯7

- [coneo/blog(24)](https://github.com/coneo/blog) ✯7

- [kengonakajima/blog(1)](https://github.com/kengonakajima/blog) ✯7

- [madewithlove/blog(1)](https://github.com/madewithlove/blog) ✯7

- [creeperyang/blog(14)](https://github.com/creeperyang/blog) ✯6

- [jerodsanto/blog(1)](https://github.com/jerodsanto/blog) ✯6

- [mjordan/blog(1)](https://github.com/mjordan/blog) ✯6

- [grapeot/blog(4)](https://github.com/grapeot/blog) ✯6

- [markkolich/blog(1)](https://github.com/markkolich/blog) ✯6

- [yangjunjun/blog(16)](https://github.com/yangjunjun/blog) ✯6

- [neverstopbuilding/blog(1)](https://github.com/neverstopbuilding/blog) ✯6

- [hanxi/blog(10)](https://github.com/hanxi/blog) ✯6

- [mishe/blog(86)](https://github.com/mishe/blog) ✯6

- [marijnh/blog(1)](https://github.com/marijnh/blog) ✯6

- [DeveloperParana/blog(3)](https://github.com/DeveloperParana/blog) ✯5

- [DudyQin/blog(3)](https://github.com/DudyQin/blog) ✯5

- [meshnet-dot-works/blog(5)](https://github.com/meshnet-dot-works/blog) ✯5

- [mb-programmer/blog(2)](https://github.com/mb-programmer/blog) ✯5

- [platanus/blog(5)](https://github.com/platanus/blog) ✯5

- [riojs-org/blog(8)](https://github.com/riojs-org/blog) ✯5

- [lmk123/blog(27)](https://github.com/lmk123/blog) ✯5

- [lshmouse/blog(1)](https://github.com/lshmouse/blog) ✯5

- [chase-seibert/blog(2)](https://github.com/chase-seibert/blog) ✯5

- [code4hk/blog(6)](https://github.com/code4hk/blog) ✯5

- [hernandev/blog(1)](https://github.com/hernandev/blog) ✯5


License
---

ISC
