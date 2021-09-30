测试网址：
http://qiuhong_cn.gitee.io/h5_game_engine_webgl_2d_render_performance_test
该网址很不稳定，经常访问不了，你可以clone或者下载该git到本地，然后放进一个http服务（比如nginx）目录里来访问
我本地的测试结果：（配置i7 7700+intel hd graphics 630集显+8g内存）
| engine | version | release time | fps |
|---|---|---|---|
| Pixi.js | 4.6.2 | 2017/11/30 | 60 |
| Phaser | 3.18.1 | 2019/6/20 | 59 |
| Layaair | 1.7.13 | 2017/11/27 | 53 |
| Cocos Creator | 2.0.10 | 2019/5/28 | 45 |
| Egret | 5.2.19 | 2019/5/13 | 32 |
| Egret | 5.1.0 | 2017/5/? | 31 |
| Layaair | 2.1.0 | 2019/5/17 | 30 |

原作者的测试网址：（有pixi.js 4.6.0,egret 5.1.0,layaair 1.7.13 三个引擎的对比）
https://k8w.github.io/webgl_2d_benchmark/