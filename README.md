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


- [fouber/blog(9)](https://github.com/fouber/blog) ✯5675

- [amfe/article(26)](https://github.com/amfe/article) ✯2689

- [lifesinger/blog(83)](https://github.com/lifesinger/blog) ✯2656

- [xufei/blog(24)](https://github.com/xufei/blog) ✯1933

- [tmallfe/tmallfe.github.io(28)](https://github.com/tmallfe/tmallfe.github.io) ✯1586

- [cssmagic/blog(48)](https://github.com/cssmagic/blog) ✯920

- [fc2blog/blog(0)](https://github.com/fc2blog/blog) ✯374

- [adonaac/blog(7)](https://github.com/adonaac/blog) ✯344

- [yisibl/blog(6)](https://github.com/yisibl/blog) ✯319

- [wintercn/blog(7)](https://github.com/wintercn/blog) ✯300

- [camsong/blog(4)](https://github.com/camsong/blog) ✯239

- [livoras/blog(11)](https://github.com/livoras/blog) ✯228

- [hax/hax.github.com(30)](https://github.com/hax/hax.github.com) ✯175

- [waynezhang/blog(0)](https://github.com/waynezhang/blog) ✯174

- [atian25/blog(10)](https://github.com/atian25/blog) ✯164

- [finiteloop/blog(0)](https://github.com/finiteloop/blog) ✯147

- [frankmcsherry/blog(0)](https://github.com/frankmcsherry/blog) ✯145

- [Lucifier129/Lucifier129.github.io(8)](https://github.com/Lucifier129/Lucifier129.github.io) ✯144

- [dfguo/blog(1)](https://github.com/dfguo/blog) ✯127

- [lukego/blog(13)](https://github.com/lukego/blog) ✯115

- [fool2fish/blog(13)](https://github.com/fool2fish/blog) ✯110

- [bh-lay/blog(1)](https://github.com/bh-lay/blog) ✯103

- [chyingp/blog(29)](https://github.com/chyingp/blog) ✯103

- [nimojs/blog(15)](https://github.com/nimojs/blog) ✯98

- [dylanninin/blog(0)](https://github.com/dylanninin/blog) ✯93

- [msurguy/blog(1)](https://github.com/msurguy/blog) ✯90

- [riskers/blog(14)](https://github.com/riskers/blog) ✯83

- [xiangpaopao/blog(8)](https://github.com/xiangpaopao/blog) ✯77

- [mhbseal/blog(0)](https://github.com/mhbseal/blog) ✯76

- [golang/blog(0)](https://github.com/golang/blog) ✯71

- [coderyi/blog(1)](https://github.com/coderyi/blog) ✯67

- [ant-ued/blog(1)](https://github.com/ant-ued/blog) ✯64

- [Ovilia/blog(0)](https://github.com/Ovilia/blog) ✯62

- [cnsnake11/blog(0)](https://github.com/cnsnake11/blog) ✯61

- [niklasfrykholm/blog(7)](https://github.com/niklasfrykholm/blog) ✯60

- [BayesianLogic/blog(45)](https://github.com/BayesianLogic/blog) ✯59

- [hugozhu/blog(1)](https://github.com/hugozhu/blog) ✯55

- [ashkrit/blog(0)](https://github.com/ashkrit/blog) ✯54

- [classicemi/blog(13)](https://github.com/classicemi/blog) ✯51

- [enml/blog(2)](https://github.com/enml/blog) ✯51

- [yeol/blog(1)](https://github.com/yeol/blog) ✯50

- [tikonen/blog(1)](https://github.com/tikonen/blog) ✯50

- [xoppa/blog(0)](https://github.com/xoppa/blog) ✯49

- [duguying/blog(1)](https://github.com/duguying/blog) ✯47

- [web2hack/blog(1)](https://github.com/web2hack/blog) ✯46

- [zrong/blog(0)](https://github.com/zrong/blog) ✯46

- [ruhoh/blog(11)](https://github.com/ruhoh/blog) ✯45

- [bgolub/blog(1)](https://github.com/bgolub/blog) ✯44

- [jxufeliujj/blog(1)](https://github.com/jxufeliujj/blog) ✯44

- [baixing/FE-Blog(7)](https://github.com/baixing/FE-Blog) ✯44

- [ccjr/blog(1)](https://github.com/ccjr/blog) ✯41

- [michieldegraaf/blog(0)](https://github.com/michieldegraaf/blog) ✯40

- [dubuyuye/blog(1)](https://github.com/dubuyuye/blog) ✯40

- [0xxff/blog(1)](https://github.com/0xxff/blog) ✯40

- [mikoskinen/blog(0)](https://github.com/mikoskinen/blog) ✯39

- [cundong/blog(0)](https://github.com/cundong/blog) ✯38

- [ocharles/blog(0)](https://github.com/ocharles/blog) ✯38

- [mackenziechild/blog(0)](https://github.com/mackenziechild/blog) ✯37

- [pixelhandler/blog(1)](https://github.com/pixelhandler/blog) ✯36

- [jakubholynet/blog(2)](https://github.com/jakubholynet/blog) ✯36

- [mode/blog(0)](https://github.com/mode/blog) ✯36

- [matthew-sun/blog(19)](https://github.com/matthew-sun/blog) ✯36

- [steveklabnik/blog(1)](https://github.com/steveklabnik/blog) ✯33

- [LearnShare/blog(1)](https://github.com/LearnShare/blog) ✯33

- [Jerry-hechen/blog(0)](https://github.com/Jerry-hechen/blog) ✯33

- [garyelephant/blog(0)](https://github.com/garyelephant/blog) ✯31

- [SamSaffron/blog(0)](https://github.com/SamSaffron/blog) ✯29

- [ma6174/blog(17)](https://github.com/ma6174/blog) ✯29

- [studywolf/blog(1)](https://github.com/studywolf/blog) ✯29

- [huangz1990/blog(0)](https://github.com/huangz1990/blog) ✯29

- [philipwalton/blog(2)](https://github.com/philipwalton/blog) ✯28

- [baldwindavid/blog(0)](https://github.com/baldwindavid/blog) ✯28

- [ashfurrow/blog(3)](https://github.com/ashfurrow/blog) ✯27

- [doyoe/blog(1)](https://github.com/doyoe/blog) ✯26

- [ljw1004/blog(2)](https://github.com/ljw1004/blog) ✯26

- [ipfs/blog(5)](https://github.com/ipfs/blog) ✯25

- [imsobear/blog(48)](https://github.com/imsobear/blog) ✯25

- [riston/blog(0)](https://github.com/riston/blog) ✯25

- [akira-cn/blog(0)](https://github.com/akira-cn/blog) ✯24

- [wenzhixin/blog(6)](https://github.com/wenzhixin/blog) ✯24

- [duythien/blog(1)](https://github.com/duythien/blog) ✯23

- [sjoerdvisscher/blog(0)](https://github.com/sjoerdvisscher/blog) ✯23

- [Gaubee/blog(83)](https://github.com/Gaubee/blog) ✯23

- [zhaoda/blog(6)](https://github.com/zhaoda/blog) ✯23

- [airhorns/blog(0)](https://github.com/airhorns/blog) ✯21

- [GitbookIO/blog(2)](https://github.com/GitbookIO/blog) ✯21

- [28harishkumar/blog(1)](https://github.com/28harishkumar/blog) ✯21

- [mominger/blog(18)](https://github.com/mominger/blog) ✯20

- [xing4git/blog(0)](https://github.com/xing4git/blog) ✯20

- [gduarte/blog(0)](https://github.com/gduarte/blog) ✯20

- [eviltrout/blog(0)](https://github.com/eviltrout/blog) ✯19

- [siddontang/blog(11)](https://github.com/siddontang/blog) ✯19

- [datanitro/blog(0)](https://github.com/datanitro/blog) ✯19

- [dgiim/blog(44)](https://github.com/dgiim/blog) ✯18

- [aui/blog(1)](https://github.com/aui/blog) ✯18

- [ngot/blog(2)](https://github.com/ngot/blog) ✯18

- [nathanleclaire/blog(2)](https://github.com/nathanleclaire/blog) ✯18

- [fperez/blog(1)](https://github.com/fperez/blog) ✯18

- [alvarto/blog(6)](https://github.com/alvarto/blog) ✯18

- [zhuoqun/blog(0)](https://github.com/zhuoqun/blog) ✯18

- [lunaryorn/blog(4)](https://github.com/lunaryorn/blog) ✯18

- [jysperm/blog(0)](https://github.com/jysperm/blog) ✯18

- [ian-ross/blog(0)](https://github.com/ian-ross/blog) ✯17

- [fxhover/blog(1)](https://github.com/fxhover/blog) ✯17

- [YIXUNFE/blog(41)](https://github.com/YIXUNFE/blog) ✯17

- [larrycai/blog(0)](https://github.com/larrycai/blog) ✯17

- [mvaneerde/blog(0)](https://github.com/mvaneerde/blog) ✯17

- [yoyoyohamapi/blog(0)](https://github.com/yoyoyohamapi/blog) ✯17

- [zhouwenbin/blog(14)](https://github.com/zhouwenbin/blog) ✯16

- [program-think/blog(0)](https://github.com/program-think/blog) ✯16

- [pezy/blog(0)](https://github.com/pezy/blog) ✯16

- [RRUZ/blog(0)](https://github.com/RRUZ/blog) ✯16

- [caolan/blog(0)](https://github.com/caolan/blog) ✯16

- [maxogden/blog(0)](https://github.com/maxogden/blog) ✯15

- [johntech-o/blog(0)](https://github.com/johntech-o/blog) ✯15

- [chinakyc/blog(0)](https://github.com/chinakyc/blog) ✯14

- [fwon/blog(15)](https://github.com/fwon/blog) ✯14

- [linxz/blog(2)](https://github.com/linxz/blog) ✯14

- [likebeta/blog(0)](https://github.com/likebeta/blog) ✯14

- [woto/blog(2)](https://github.com/woto/blog) ✯14

- [substack/blog(5)](https://github.com/substack/blog) ✯14

- [sam408130/blog(0)](https://github.com/sam408130/blog) ✯14

- [techird/blog(2)](https://github.com/techird/blog) ✯13

- [Pearyman/blog(3)](https://github.com/Pearyman/blog) ✯13

- [digoal/blog(0)](https://github.com/digoal/blog) ✯13

- [kerryChen95/blog(8)](https://github.com/kerryChen95/blog) ✯13

- [zwhu/blog(18)](https://github.com/zwhu/blog) ✯12

- [serverfireteam/blog(4)](https://github.com/serverfireteam/blog) ✯12

- [halida/blog(0)](https://github.com/halida/blog) ✯12

- [shendl1978/blog(0)](https://github.com/shendl1978/blog) ✯12

- [Hiufan/blog(19)](https://github.com/Hiufan/blog) ✯12

- [thoughtram/blog(18)](https://github.com/thoughtram/blog) ✯12

- [auth0/blog(5)](https://github.com/auth0/blog) ✯12

- [barretlee/blog(0)](https://github.com/barretlee/blog) ✯11

- [owningrails/blog(0)](https://github.com/owningrails/blog) ✯11

- [yegor256/blog(1)](https://github.com/yegor256/blog) ✯11

- [felixjendrusch/blog(0)](https://github.com/felixjendrusch/blog) ✯11

- [chaoxu/blog(0)](https://github.com/chaoxu/blog) ✯11

- [confidence68/blog(178)](https://github.com/confidence68/blog) ✯11

- [mislav/blog(0)](https://github.com/mislav/blog) ✯11

- [arogulin/blog(10)](https://github.com/arogulin/blog) ✯11

- [josef-jelinek/blog(0)](https://github.com/josef-jelinek/blog) ✯11

- [divarvel/blog(1)](https://github.com/divarvel/blog) ✯11

- [fredshare/blog(21)](https://github.com/fredshare/blog) ✯11

- [pimcore-extensions/blog(3)](https://github.com/pimcore-extensions/blog) ✯11

- [strikingly/blog(21)](https://github.com/strikingly/blog) ✯11

- [chunpu/blog(68)](https://github.com/chunpu/blog) ✯11

- [room-15/blog(0)](https://github.com/room-15/blog) ✯11

- [nareix/blog(0)](https://github.com/nareix/blog) ✯10

- [ecomfe/blog(3)](https://github.com/ecomfe/blog) ✯10

- [Tikitoo/blog(18)](https://github.com/Tikitoo/blog) ✯10

- [stevewedig/blog(0)](https://github.com/stevewedig/blog) ✯10

- [davidvanleeuwen/blog(0)](https://github.com/davidvanleeuwen/blog) ✯10

- [yikebocai/blog(40)](https://github.com/yikebocai/blog) ✯10

- [melonHuang/blog(2)](https://github.com/melonHuang/blog) ✯10

- [jeffknupp/blog(0)](https://github.com/jeffknupp/blog) ✯10

- [stuartnelson3/blog(0)](https://github.com/stuartnelson3/blog) ✯10

- [tarekziade/blog(1)](https://github.com/tarekziade/blog) ✯10

- [phatak-dev/blog(2)](https://github.com/phatak-dev/blog) ✯10

- [jiajunhuang/blog(0)](https://github.com/jiajunhuang/blog) ✯10

- [Strajk/blog(0)](https://github.com/Strajk/blog) ✯9

- [trabe-teaching/blog(0)](https://github.com/trabe-teaching/blog) ✯9

- [LingyuCoder/blog(1)](https://github.com/LingyuCoder/blog) ✯9

- [azat/blog(0)](https://github.com/azat/blog) ✯9

- [muromec/blog(0)](https://github.com/muromec/blog) ✯9

- [jiangyuan/blog(0)](https://github.com/jiangyuan/blog) ✯9

- [link-intersystems/blog(0)](https://github.com/link-intersystems/blog) ✯9

- [jfrazelle/blog(0)](https://github.com/jfrazelle/blog) ✯9

- [ddsbook/blog(0)](https://github.com/ddsbook/blog) ✯9

- [stewart/blog(0)](https://github.com/stewart/blog) ✯9

- [yutingzhao1991/blog(3)](https://github.com/yutingzhao1991/blog) ✯9

- [jlinux/blog(0)](https://github.com/jlinux/blog) ✯8

- [iocanel/blog(1)](https://github.com/iocanel/blog) ✯8

- [savvastj/blog(0)](https://github.com/savvastj/blog) ✯8

- [kr/blog(0)](https://github.com/kr/blog) ✯8

- [xgfe/blog(0)](https://github.com/xgfe/blog) ✯8

- [Gallardot/blog(0)](https://github.com/Gallardot/blog) ✯8

- [qmcclab/blog(0)](https://github.com/qmcclab/blog) ✯8

- [chemzqm/blog(0)](https://github.com/chemzqm/blog) ✯8

- [goosemo/blog(0)](https://github.com/goosemo/blog) ✯8

- [TazeTSchnitzel/blog(2)](https://github.com/TazeTSchnitzel/blog) ✯8

- [DavidVujic/blog(0)](https://github.com/DavidVujic/blog) ✯8

- [qawemlilo/blog(0)](https://github.com/qawemlilo/blog) ✯7

- [zachwill/blog(0)](https://github.com/zachwill/blog) ✯7

- [tangbc/blog(0)](https://github.com/tangbc/blog) ✯7

- [sergiolopes/blog(0)](https://github.com/sergiolopes/blog) ✯7

- [kengonakajima/blog(1)](https://github.com/kengonakajima/blog) ✯7

- [madewithlove/blog(1)](https://github.com/madewithlove/blog) ✯7

- [fightteam/blog(1)](https://github.com/fightteam/blog) ✯7

- [indutny/blog(0)](https://github.com/indutny/blog) ✯7

- [shenchauhan/blog(0)](https://github.com/shenchauhan/blog) ✯7

- [soffes/blog(0)](https://github.com/soffes/blog) ✯7

- [bholst/blog(6)](https://github.com/bholst/blog) ✯7

- [jlfwong/blog(0)](https://github.com/jlfwong/blog) ✯7

- [Keruspe/blog(0)](https://github.com/Keruspe/blog) ✯7

- [pivotal/blog(8)](https://github.com/pivotal/blog) ✯7

- [ixiaoluo/blog(0)](https://github.com/ixiaoluo/blog) ✯7

- [gbraad/blog(0)](https://github.com/gbraad/blog) ✯7

- [teamrun/blog(0)](https://github.com/teamrun/blog) ✯7

- [haskellbr/blog(8)](https://github.com/haskellbr/blog) ✯7

- [campoy/blog(0)](https://github.com/campoy/blog) ✯7

- [Enome/blog(4)](https://github.com/Enome/blog) ✯7

- [phalcon/blog(0)](https://github.com/phalcon/blog) ✯7

- [diegorubin/blog(0)](https://github.com/diegorubin/blog) ✯7

- [dsindex/blog(0)](https://github.com/dsindex/blog) ✯7

- [passy/blog(0)](https://github.com/passy/blog) ✯7

- [silveryllium/blog(0)](https://github.com/silveryllium/blog) ✯6

- [zhu327/blog(0)](https://github.com/zhu327/blog) ✯6

- [binaryage/blog(0)](https://github.com/binaryage/blog) ✯6

- [pageman/blog(0)](https://github.com/pageman/blog) ✯6

- [mjordan/blog(1)](https://github.com/mjordan/blog) ✯6

- [grapeot/blog(4)](https://github.com/grapeot/blog) ✯6

- [yanyiwu/blog(0)](https://github.com/yanyiwu/blog) ✯6

- [houshuang/blog(0)](https://github.com/houshuang/blog) ✯6

- [amilna/blog(3)](https://github.com/amilna/blog) ✯6

- [fritx/blog(1)](https://github.com/fritx/blog) ✯6

- [emaadmanzoor/blog(0)](https://github.com/emaadmanzoor/blog) ✯6

- [zhu327/blog(0)](https://github.com/zhu327/blog) ✯6

- [Incognito/blog(0)](https://github.com/Incognito/blog) ✯6

- [smeeckaert/blog(0)](https://github.com/smeeckaert/blog) ✯6

- [markkolich/blog(0)](https://github.com/markkolich/blog) ✯6

- [coneo/blog(24)](https://github.com/coneo/blog) ✯6

- [yangjunjun/blog(15)](https://github.com/yangjunjun/blog) ✯6

- [marijnh/blog(1)](https://github.com/marijnh/blog) ✯6

- [ericmoritz/blog(0)](https://github.com/ericmoritz/blog) ✯6

- [asmcos/blog(0)](https://github.com/asmcos/blog) ✯6

- [neverstopbuilding/blog(1)](https://github.com/neverstopbuilding/blog) ✯6

- [mattalcock/blog(0)](https://github.com/mattalcock/blog) ✯6

- [rhinoIO/blog(0)](https://github.com/rhinoIO/blog) ✯6

- [lucassmagal/blog(0)](https://github.com/lucassmagal/blog) ✯6

- [prograholic/blog(0)](https://github.com/prograholic/blog) ✯6

- [jerodsanto/blog(1)](https://github.com/jerodsanto/blog) ✯6

- [AustinRochford/blog(0)](https://github.com/AustinRochford/blog) ✯6

- [DudyQin/blog(3)](https://github.com/DudyQin/blog) ✯5

- [yangweijie/blog(0)](https://github.com/yangweijie/blog) ✯5

- [hernandev/blog(1)](https://github.com/hernandev/blog) ✯5

- [a1114tk/blog(0)](https://github.com/a1114tk/blog) ✯5

- [EzoeRyou/blog(0)](https://github.com/EzoeRyou/blog) ✯5

- [lshmouse/blog(1)](https://github.com/lshmouse/blog) ✯5

- [kaihendry/blog(0)](https://github.com/kaihendry/blog) ✯5

- [creeperyang/blog(13)](https://github.com/creeperyang/blog) ✯5

- [yangchao0033/blog(0)](https://github.com/yangchao0033/blog) ✯5

- [robertpitt/blog(0)](https://github.com/robertpitt/blog) ✯5

- [lfont/blog(0)](https://github.com/lfont/blog) ✯5

- [bobanj/blog(0)](https://github.com/bobanj/blog) ✯5

- [NoahRic/blog(0)](https://github.com/NoahRic/blog) ✯5

- [cloudcmd/blog(0)](https://github.com/cloudcmd/blog) ✯5

- [dandanzhou/blog(0)](https://github.com/dandanzhou/blog) ✯5

- [KyleAMathews/blog(0)](https://github.com/KyleAMathews/blog) ✯5

- [hanxi/blog(10)](https://github.com/hanxi/blog) ✯5

- [christianhager/blog(0)](https://github.com/christianhager/blog) ✯5

- [joho/blog(0)](https://github.com/joho/blog) ✯5

- [riojs-org/blog(8)](https://github.com/riojs-org/blog) ✯5

- [meshnet-dot-works/blog(5)](https://github.com/meshnet-dot-works/blog) ✯5

- [georgi/blog(0)](https://github.com/georgi/blog) ✯5

- [georgi/blog(0)](https://github.com/georgi/blog) ✯5

- [ahara/blog(0)](https://github.com/ahara/blog) ✯5

- [biaopiao/blog(0)](https://github.com/biaopiao/blog) ✯5

- [platanus/blog(6)](https://github.com/platanus/blog) ✯5

- [chase-seibert/blog(2)](https://github.com/chase-seibert/blog) ✯5

- [kpiwko/blog(0)](https://github.com/kpiwko/blog) ✯5

- [code4hk/blog(6)](https://github.com/code4hk/blog) ✯5

- [DamienFremont/blog(0)](https://github.com/DamienFremont/blog) ✯5

- [geomin/blog(0)](https://github.com/geomin/blog) ✯5


License
---

ISC