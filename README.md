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


- [fouber/blog(10)](https://github.com/fouber/blog) ✯6699

- [amfe/article(27)](https://github.com/amfe/article) ✯3189

- [lifesinger/blog(84)](https://github.com/lifesinger/blog) ✯2865

- [xufei/blog(25)](https://github.com/xufei/blog) ✯2400

- [tmallfe/tmallfe.github.io(32)](https://github.com/tmallfe/tmallfe.github.io) ✯2068

- [cssmagic/blog(52)](https://github.com/cssmagic/blog) ✯1054

- [gf-rd/blog(32)](https://github.com/gf-rd/blog) ✯476

- [kuitos/kuitos.github.io(32)](https://github.com/kuitos/kuitos.github.io) ✯405

- [livoras/blog(12)](https://github.com/livoras/blog) ✯402

- [yisibl/blog(6)](https://github.com/yisibl/blog) ✯350

- [wintercn/blog(7)](https://github.com/wintercn/blog) ✯317

- [camsong/blog(6)](https://github.com/camsong/blog) ✯309

- [camsong/blog(6)](https://github.com/camsong/blog) ✯309

- [riskers/blog(21)](https://github.com/riskers/blog) ✯207

- [riskers/blog(21)](https://github.com/riskers/blog) ✯207

- [coderyi/blog(1)](https://github.com/coderyi/blog) ✯203

- [lukego/blog(15)](https://github.com/lukego/blog) ✯193

- [hax/hax.github.com(31)](https://github.com/hax/hax.github.com) ✯191

- [atian25/blog(10)](https://github.com/atian25/blog) ✯190

- [Lucifier129/Lucifier129.github.io(8)](https://github.com/Lucifier129/Lucifier129.github.io) ✯157

- [bh-lay/blog(1)](https://github.com/bh-lay/blog) ✯132

- [dfguo/blog(1)](https://github.com/dfguo/blog) ✯129

- [cnsnake11/blog(4)](https://github.com/cnsnake11/blog) ✯127

- [nimojs/blog(13)](https://github.com/nimojs/blog) ✯123

- [chyingp/blog(29)](https://github.com/chyingp/blog) ✯118

- [ant-ued/blog(1)](https://github.com/ant-ued/blog) ✯106

- [ant-ued/blog(1)](https://github.com/ant-ued/blog) ✯106

- [viktorklang/blog(1)](https://github.com/viktorklang/blog) ✯96

- [msurguy/blog(2)](https://github.com/msurguy/blog) ✯92

- [SimplyY/blog(2)](https://github.com/SimplyY/blog) ✯75

- [matthew-sun/blog(19)](https://github.com/matthew-sun/blog) ✯68

- [BayesianLogic/blog(44)](https://github.com/BayesianLogic/blog) ✯63

- [niklasfrykholm/blog(7)](https://github.com/niklasfrykholm/blog) ✯62

- [enml/blog(2)](https://github.com/enml/blog) ✯56

- [tikonen/blog(1)](https://github.com/tikonen/blog) ✯55

- [lcxfs1991/blog(6)](https://github.com/lcxfs1991/blog) ✯54

- [classicemi/blog(13)](https://github.com/classicemi/blog) ✯53

- [rccoder/blog(6)](https://github.com/rccoder/blog) ✯49

- [baixing/FE-Blog(7)](https://github.com/baixing/FE-Blog) ✯47

- [dubuyuye/blog(1)](https://github.com/dubuyuye/blog) ✯46

- [web2hack/blog(1)](https://github.com/web2hack/blog) ✯46

- [dubuyuye/blog(1)](https://github.com/dubuyuye/blog) ✯46

- [bgolub/blog(1)](https://github.com/bgolub/blog) ✯45

- [ruhoh/blog(11)](https://github.com/ruhoh/blog) ✯45

- [ruhoh/blog(11)](https://github.com/ruhoh/blog) ✯45

- [ccjr/blog(1)](https://github.com/ccjr/blog) ✯42

- [0x00A/blog(1)](https://github.com/0x00A/blog) ✯42

- [ccjr/blog(1)](https://github.com/ccjr/blog) ✯42

- [jakubholynet/blog(2)](https://github.com/jakubholynet/blog) ✯39

- [jakubholynet/blog(2)](https://github.com/jakubholynet/blog) ✯39

- [huangz1990/blog(1)](https://github.com/huangz1990/blog) ✯38

- [huangz1990/blog(1)](https://github.com/huangz1990/blog) ✯38

- [pixelhandler/blog(1)](https://github.com/pixelhandler/blog) ✯37

- [ma6174/blog(17)](https://github.com/ma6174/blog) ✯37

- [LearnShare/blog(1)](https://github.com/LearnShare/blog) ✯35

- [28harishkumar/blog(4)](https://github.com/28harishkumar/blog) ✯35

- [steveklabnik/blog(1)](https://github.com/steveklabnik/blog) ✯34

- [steveklabnik/blog(1)](https://github.com/steveklabnik/blog) ✯34

- [ashfurrow/blog(5)](https://github.com/ashfurrow/blog) ✯33

- [zhiqiang21/blog(11)](https://github.com/zhiqiang21/blog) ✯33

- [wenzhixin/blog(6)](https://github.com/wenzhixin/blog) ✯31

- [huei90/blog(5)](https://github.com/huei90/blog) ✯30

- [mafintosh/blog(1)](https://github.com/mafintosh/blog) ✯27

- [ipfs/blog(12)](https://github.com/ipfs/blog) ✯27

- [ljw1004/blog(3)](https://github.com/ljw1004/blog) ✯27

- [imsobear/blog(48)](https://github.com/imsobear/blog) ✯27

- [fwon/blog(15)](https://github.com/fwon/blog) ✯27

- [mominger/blog(18)](https://github.com/mominger/blog) ✯24

- [zhaoda/blog(6)](https://github.com/zhaoda/blog) ✯24

- [zhouwenbin/blog(15)](https://github.com/zhouwenbin/blog) ✯23

- [Gaubee/blog(85)](https://github.com/Gaubee/blog) ✯23

- [YIXUNFE/blog(60)](https://github.com/YIXUNFE/blog) ✯22

- [thoughtram/blog(14)](https://github.com/thoughtram/blog) ✯22

- [GitbookIO/blog(2)](https://github.com/GitbookIO/blog) ✯21

- [zwhu/blog(24)](https://github.com/zwhu/blog) ✯21

- [alvarto/blog(6)](https://github.com/alvarto/blog) ✯21

- [xieranmaya/blog(2)](https://github.com/xieranmaya/blog) ✯21

- [dgiim/blog(46)](https://github.com/dgiim/blog) ✯20

- [ngot/blog(2)](https://github.com/ngot/blog) ✯20

- [fxhover/blog(1)](https://github.com/fxhover/blog) ✯20

- [techird/blog(2)](https://github.com/techird/blog) ✯20

- [siddontang/blog(11)](https://github.com/siddontang/blog) ✯19

- [lunaryorn/blog(4)](https://github.com/lunaryorn/blog) ✯19

- [serverfireteam/blog(4)](https://github.com/serverfireteam/blog) ✯18

- [fperez/blog(1)](https://github.com/fperez/blog) ✯18

- [aui/blog(1)](https://github.com/aui/blog) ✯18

- [nathanleclaire/blog(3)](https://github.com/nathanleclaire/blog) ✯17

- [pivotal/blog(11)](https://github.com/pivotal/blog) ✯17

- [linxz/blog(2)](https://github.com/linxz/blog) ✯15

- [confidence68/blog(187)](https://github.com/confidence68/blog) ✯15

- [creeperyang/blog(18)](https://github.com/creeperyang/blog) ✯14

- [substack/blog(6)](https://github.com/substack/blog) ✯14

- [luqin/blog(13)](https://github.com/luqin/blog) ✯14

- [woto/blog(2)](https://github.com/woto/blog) ✯14

- [kerryChen95/blog(8)](https://github.com/kerryChen95/blog) ✯14

- [sorrycc/blog(1)](https://github.com/sorrycc/blog) ✯13

- [josef-jelinek/blog(1)](https://github.com/josef-jelinek/blog) ✯13

- [fredshare/blog(22)](https://github.com/fredshare/blog) ✯13

- [Hiufan/blog(19)](https://github.com/Hiufan/blog) ✯13

- [Pearyman/blog(3)](https://github.com/Pearyman/blog) ✯13

- [chunpu/blog(68)](https://github.com/chunpu/blog) ✯12

- [qq610540622/blog(2)](https://github.com/qq610540622/blog) ✯12

- [arogulin/blog(10)](https://github.com/arogulin/blog) ✯12

- [Tikitoo/blog(16)](https://github.com/Tikitoo/blog) ✯12

- [pimcore-extensions/blog(3)](https://github.com/pimcore-extensions/blog) ✯11

- [divarvel/blog(1)](https://github.com/divarvel/blog) ✯11

- [yutingzhao1991/blog(4)](https://github.com/yutingzhao1991/blog) ✯11

- [nareix/blog(1)](https://github.com/nareix/blog) ✯11

- [strikingly/blog(21)](https://github.com/strikingly/blog) ✯11

- [yikebocai/blog(40)](https://github.com/yikebocai/blog) ✯10

- [jollen/blog(7)](https://github.com/jollen/blog) ✯10

- [yegor256/blog(2)](https://github.com/yegor256/blog) ✯10

- [tarekziade/blog(2)](https://github.com/tarekziade/blog) ✯10

- [ecomfe/blog(3)](https://github.com/ecomfe/blog) ✯10

- [melonHuang/blog(2)](https://github.com/melonHuang/blog) ✯10

- [LingyuCoder/blog(1)](https://github.com/LingyuCoder/blog) ✯9

- [TazeTSchnitzel/blog(2)](https://github.com/TazeTSchnitzel/blog) ✯9

- [madewithlove/blog(3)](https://github.com/madewithlove/blog) ✯8

- [lapwinglabs/blog(1)](https://github.com/lapwinglabs/blog) ✯8

- [coneo/blog(24)](https://github.com/coneo/blog) ✯8

- [lmk123/blog(31)](https://github.com/lmk123/blog) ✯8

- [iocanel/blog(1)](https://github.com/iocanel/blog) ✯8

- [kengonakajima/blog(1)](https://github.com/kengonakajima/blog) ✯7

- [amilna/blog(1)](https://github.com/amilna/blog) ✯7

- [fightteam/blog(1)](https://github.com/fightteam/blog) ✯7

- [mishe/blog(100)](https://github.com/mishe/blog) ✯7

- [bholst/blog(6)](https://github.com/bholst/blog) ✯7

- [Enome/blog(4)](https://github.com/Enome/blog) ✯7

- [lihaoyi/blog(1)](https://github.com/lihaoyi/blog) ✯7

- [mjordan/blog(1)](https://github.com/mjordan/blog) ✯7

- [BuptStEve/blog(4)](https://github.com/BuptStEve/blog) ✯6

- [xuexb/blog(5)](https://github.com/xuexb/blog) ✯6

- [markkolich/blog(1)](https://github.com/markkolich/blog) ✯6

- [taobaofed/blog(1)](https://github.com/taobaofed/blog) ✯6

- [marijnh/blog(1)](https://github.com/marijnh/blog) ✯6

- [gigiigig/blog(1)](https://github.com/gigiigig/blog) ✯6

- [hanxi/blog(10)](https://github.com/hanxi/blog) ✯6

- [mb-programmer/blog(2)](https://github.com/mb-programmer/blog) ✯6

- [jbranchaud/blog(15)](https://github.com/jbranchaud/blog) ✯6

- [neverstopbuilding/blog(1)](https://github.com/neverstopbuilding/blog) ✯6

- [yangjunjun/blog(15)](https://github.com/yangjunjun/blog) ✯6

- [jerodsanto/blog(1)](https://github.com/jerodsanto/blog) ✯6

- [AustinRochford/blog(1)](https://github.com/AustinRochford/blog) ✯6

- [DudyQin/blog(3)](https://github.com/DudyQin/blog) ✯5

- [xinhuanetLAB/blog(15)](https://github.com/xinhuanetLAB/blog) ✯5

- [riojs-org/blog(8)](https://github.com/riojs-org/blog) ✯5

- [waltye/blog(1)](https://github.com/waltye/blog) ✯5

- [platanus/blog(6)](https://github.com/platanus/blog) ✯5

- [code4hk/blog(6)](https://github.com/code4hk/blog) ✯5

- [zhanhongtao/blog(159)](https://github.com/zhanhongtao/blog) ✯5

- [chase-seibert/blog(2)](https://github.com/chase-seibert/blog) ✯5

- [DeveloperParana/blog(3)](https://github.com/DeveloperParana/blog) ✯5

- [hernandev/blog(1)](https://github.com/hernandev/blog) ✯5

- [grapeot/blog(4)](https://github.com/grapeot/blog) ✯5


License
---

ISC
