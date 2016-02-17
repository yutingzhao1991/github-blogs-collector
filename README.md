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


- [fouber/blog(9)](https://github.com/fouber/blog) ✯6295

- [amfe/article(27)](https://github.com/amfe/article) ✯3046

- [lifesinger/blog(84)](https://github.com/lifesinger/blog) ✯2788

- [xufei/blog(25)](https://github.com/xufei/blog) ✯2256

- [tmallfe/tmallfe.github.io(29)](https://github.com/tmallfe/tmallfe.github.io) ✯1862

- [cssmagic/blog(51)](https://github.com/cssmagic/blog) ✯1022

- [gf-rd/blog(30)](https://github.com/gf-rd/blog) ✯444

- [adonaac/blog(10)](https://github.com/adonaac/blog) ✯412

- [kuitos/kuitos.github.io(31)](https://github.com/kuitos/kuitos.github.io) ✯387

- [livoras/blog(12)](https://github.com/livoras/blog) ✯345

- [yisibl/blog(6)](https://github.com/yisibl/blog) ✯339

- [wintercn/blog(7)](https://github.com/wintercn/blog) ✯308

- [camsong/blog(6)](https://github.com/camsong/blog) ✯290

- [coderyi/blog(1)](https://github.com/coderyi/blog) ✯184

- [hax/hax.github.com(31)](https://github.com/hax/hax.github.com) ✯182

- [atian25/blog(10)](https://github.com/atian25/blog) ✯176

- [riskers/blog(18)](https://github.com/riskers/blog) ✯168

- [Lucifier129/Lucifier129.github.io(8)](https://github.com/Lucifier129/Lucifier129.github.io) ✯154

- [dfguo/blog(1)](https://github.com/dfguo/blog) ✯129

- [bh-lay/blog(1)](https://github.com/bh-lay/blog) ✯125

- [fool2fish/blog(13)](https://github.com/fool2fish/blog) ✯119

- [lukego/blog(14)](https://github.com/lukego/blog) ✯118

- [nimojs/blog(13)](https://github.com/nimojs/blog) ✯115

- [chyingp/blog(29)](https://github.com/chyingp/blog) ✯114

- [cnsnake11/blog(3)](https://github.com/cnsnake11/blog) ✯114

- [xiangpaopao/blog(8)](https://github.com/xiangpaopao/blog) ✯97

- [msurguy/blog(1)](https://github.com/msurguy/blog) ✯92

- [ant-ued/blog(1)](https://github.com/ant-ued/blog) ✯91

- [BayesianLogic/blog(45)](https://github.com/BayesianLogic/blog) ✯62

- [niklasfrykholm/blog(7)](https://github.com/niklasfrykholm/blog) ✯61

- [duguying/blog(1)](https://github.com/duguying/blog) ✯60

- [hugozhu/blog(1)](https://github.com/hugozhu/blog) ✯57

- [enml/blog(2)](https://github.com/enml/blog) ✯56

- [yeol/blog(1)](https://github.com/yeol/blog) ✯53

- [tikonen/blog(1)](https://github.com/tikonen/blog) ✯53

- [classicemi/blog(13)](https://github.com/classicemi/blog) ✯51

- [matthew-sun/blog(19)](https://github.com/matthew-sun/blog) ✯49

- [jxufeliujj/blog(1)](https://github.com/jxufeliujj/blog) ✯49

- [web2hack/blog(1)](https://github.com/web2hack/blog) ✯46

- [baixing/FE-Blog(7)](https://github.com/baixing/FE-Blog) ✯46

- [ruhoh/blog(11)](https://github.com/ruhoh/blog) ✯45

- [bgolub/blog(1)](https://github.com/bgolub/blog) ✯44

- [lcxfs1991/blog(6)](https://github.com/lcxfs1991/blog) ✯43

- [dubuyuye/blog(1)](https://github.com/dubuyuye/blog) ✯43

- [0x00A/blog(1)](https://github.com/0x00A/blog) ✯42

- [ccjr/blog(1)](https://github.com/ccjr/blog) ✯41

- [huangz1990/blog(1)](https://github.com/huangz1990/blog) ✯38

- [pixelhandler/blog(1)](https://github.com/pixelhandler/blog) ✯37

- [jakubholynet/blog(2)](https://github.com/jakubholynet/blog) ✯37

- [ma6174/blog(17)](https://github.com/ma6174/blog) ✯36

- [studywolf/blog(2)](https://github.com/studywolf/blog) ✯34

- [steveklabnik/blog(1)](https://github.com/steveklabnik/blog) ✯34

- [ashfurrow/blog(3)](https://github.com/ashfurrow/blog) ✯33

- [28harishkumar/blog(1)](https://github.com/28harishkumar/blog) ✯33

- [LearnShare/blog(1)](https://github.com/LearnShare/blog) ✯33

- [huei90/blog(5)](https://github.com/huei90/blog) ✯30

- [wenzhixin/blog(6)](https://github.com/wenzhixin/blog) ✯30

- [ljw1004/blog(3)](https://github.com/ljw1004/blog) ✯27

- [ipfs/blog(9)](https://github.com/ipfs/blog) ✯27

- [imsobear/blog(48)](https://github.com/imsobear/blog) ✯26

- [duythien/blog(1)](https://github.com/duythien/blog) ✯26

- [doyoe/blog(1)](https://github.com/doyoe/blog) ✯26

- [mafintosh/blog(1)](https://github.com/mafintosh/blog) ✯25

- [zhaoda/blog(6)](https://github.com/zhaoda/blog) ✯24

- [Gaubee/blog(84)](https://github.com/Gaubee/blog) ✯23

- [mominger/blog(18)](https://github.com/mominger/blog) ✯23

- [fwon/blog(15)](https://github.com/fwon/blog) ✯23

- [zhouwenbin/blog(15)](https://github.com/zhouwenbin/blog) ✯21

- [GitbookIO/blog(2)](https://github.com/GitbookIO/blog) ✯21

- [YIXUNFE/blog(54)](https://github.com/YIXUNFE/blog) ✯21

- [thoughtram/blog(16)](https://github.com/thoughtram/blog) ✯21

- [fxhover/blog(1)](https://github.com/fxhover/blog) ✯20

- [techird/blog(2)](https://github.com/techird/blog) ✯20

- [yoyoyohamapi/blog(1)](https://github.com/yoyoyohamapi/blog) ✯20

- [ngot/blog(2)](https://github.com/ngot/blog) ✯20

- [lunaryorn/blog(4)](https://github.com/lunaryorn/blog) ✯19

- [nathanleclaire/blog(3)](https://github.com/nathanleclaire/blog) ✯19

- [siddontang/blog(11)](https://github.com/siddontang/blog) ✯19

- [dgiim/blog(43)](https://github.com/dgiim/blog) ✯18

- [fperez/blog(1)](https://github.com/fperez/blog) ✯18

- [aui/blog(1)](https://github.com/aui/blog) ✯18

- [serverfireteam/blog(3)](https://github.com/serverfireteam/blog) ✯17

- [alvarto/blog(6)](https://github.com/alvarto/blog) ✯17

- [pivotal/blog(12)](https://github.com/pivotal/blog) ✯16

- [SimplyY/blog(1)](https://github.com/SimplyY/blog) ✯16

- [zwhu/blog(20)](https://github.com/zwhu/blog) ✯15

- [confidence68/blog(184)](https://github.com/confidence68/blog) ✯15

- [linxz/blog(2)](https://github.com/linxz/blog) ✯15

- [woto/blog(2)](https://github.com/woto/blog) ✯14

- [substack/blog(6)](https://github.com/substack/blog) ✯14

- [kerryChen95/blog(8)](https://github.com/kerryChen95/blog) ✯14

- [phatak-dev/blog(2)](https://github.com/phatak-dev/blog) ✯14

- [Pearyman/blog(3)](https://github.com/Pearyman/blog) ✯13

- [chunpu/blog(68)](https://github.com/chunpu/blog) ✯12

- [arogulin/blog(10)](https://github.com/arogulin/blog) ✯12

- [auth0/blog(4)](https://github.com/auth0/blog) ✯12

- [Tikitoo/blog(16)](https://github.com/Tikitoo/blog) ✯12

- [Hiufan/blog(19)](https://github.com/Hiufan/blog) ✯12

- [fredshare/blog(22)](https://github.com/fredshare/blog) ✯12

- [yutingzhao1991/blog(4)](https://github.com/yutingzhao1991/blog) ✯12

- [xieranmaya/blog(2)](https://github.com/xieranmaya/blog) ✯11

- [pimcore-extensions/blog(3)](https://github.com/pimcore-extensions/blog) ✯11

- [strikingly/blog(21)](https://github.com/strikingly/blog) ✯11

- [divarvel/blog(1)](https://github.com/divarvel/blog) ✯11

- [nareix/blog(1)](https://github.com/nareix/blog) ✯10

- [jollen/blog(5)](https://github.com/jollen/blog) ✯10

- [ecomfe/blog(3)](https://github.com/ecomfe/blog) ✯10

- [tarekziade/blog(1)](https://github.com/tarekziade/blog) ✯10

- [yikebocai/blog(40)](https://github.com/yikebocai/blog) ✯10

- [yegor256/blog(2)](https://github.com/yegor256/blog) ✯10

- [melonHuang/blog(2)](https://github.com/melonHuang/blog) ✯10

- [LingyuCoder/blog(1)](https://github.com/LingyuCoder/blog) ✯9

- [TazeTSchnitzel/blog(2)](https://github.com/TazeTSchnitzel/blog) ✯9

- [madewithlove/blog(2)](https://github.com/madewithlove/blog) ✯8

- [iocanel/blog(1)](https://github.com/iocanel/blog) ✯8

- [luqin/blog(13)](https://github.com/luqin/blog) ✯8

- [mjordan/blog(1)](https://github.com/mjordan/blog) ✯7

- [amilna/blog(1)](https://github.com/amilna/blog) ✯7

- [fightteam/blog(1)](https://github.com/fightteam/blog) ✯7

- [creeperyang/blog(16)](https://github.com/creeperyang/blog) ✯7

- [Enome/blog(4)](https://github.com/Enome/blog) ✯7

- [coneo/blog(24)](https://github.com/coneo/blog) ✯7

- [mishe/blog(95)](https://github.com/mishe/blog) ✯7

- [bholst/blog(6)](https://github.com/bholst/blog) ✯7

- [kengonakajima/blog(1)](https://github.com/kengonakajima/blog) ✯7

- [hanxi/blog(10)](https://github.com/hanxi/blog) ✯6

- [markkolich/blog(1)](https://github.com/markkolich/blog) ✯6

- [yangjunjun/blog(16)](https://github.com/yangjunjun/blog) ✯6

- [neverstopbuilding/blog(1)](https://github.com/neverstopbuilding/blog) ✯6

- [marijnh/blog(1)](https://github.com/marijnh/blog) ✯6

- [xuexb/blog(4)](https://github.com/xuexb/blog) ✯6

- [jerodsanto/blog(1)](https://github.com/jerodsanto/blog) ✯6

- [lmk123/blog(30)](https://github.com/lmk123/blog) ✯6

- [jbranchaud/blog(15)](https://github.com/jbranchaud/blog) ✯5

- [DudyQin/blog(3)](https://github.com/DudyQin/blog) ✯5

- [platanus/blog(5)](https://github.com/platanus/blog) ✯5

- [riojs-org/blog(8)](https://github.com/riojs-org/blog) ✯5

- [waltye/blog(1)](https://github.com/waltye/blog) ✯5

- [mb-programmer/blog(2)](https://github.com/mb-programmer/blog) ✯5

- [xinhuanetLAB/blog(13)](https://github.com/xinhuanetLAB/blog) ✯5

- [code4hk/blog(6)](https://github.com/code4hk/blog) ✯5

- [grapeot/blog(4)](https://github.com/grapeot/blog) ✯5

- [hernandev/blog(1)](https://github.com/hernandev/blog) ✯5

- [lapwinglabs/blog(1)](https://github.com/lapwinglabs/blog) ✯5

- [chase-seibert/blog(2)](https://github.com/chase-seibert/blog) ✯5

- [DeveloperParana/blog(3)](https://github.com/DeveloperParana/blog) ✯5


License
---

ISC
