测试内容：
100张256\*256px的散图（没有打图集），每张图片生成20个显示对象，将图片缩放到64\*64px后按图1一个，图2一个以此类推的顺序（防止drawcall合并）在640*1136的显示区域内均匀排布。总共2000个显示对象，drawcall也是2000

测试网址：
http://qiuhong_cn.gitee.io/h5_render_engine_performance_test
<br>该网址很不稳定，经常访问不了，你可以clone或者下载该git到本地，然后放进一个http服务（比如nginx）目录里来访问

我本地的测试结果：（配置i7 7700+intel hd graphics 630集显+8g内存）
| engine | version | release time | fps(webgl) | fps(canvas) |
|---|---|---|---|---|
| Pixi.js | 4.6.2 | 2017/11/30 | 60 |
| Phaser | 3.18.1 | 2019/6/20 | 60 |
| Layaair | 1.7.13 | 2017/11/27 | 52 | 58 |
| Layaair | 1.8.14 | 2021/7/21 | 51 | 58 |
| EaselJs | 1.0.0 | 2017/9/16 | 50 |
| Cocos Creator | 2.0.10 | 2019/5/28 | 45 |
| Egret | 5.1.0 | 2017/5/? | 31 | 59 |
| Egret | 5.2.19 | 2019/5/13 | 31 | 59 |
| Layaair | 2.1.0 | 2019/5/17 | 32 | 26 |

原作者的测试网址：（有pixi.js 4.6.0,egret 5.1.0,layaair 1.7.13 三个引擎的对比）
https://k8w.github.io/webgl_2d_benchmark/