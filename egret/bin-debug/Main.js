/**
 * 代码及图片素材来自于：https://k8w.github.io/webgl_2d_benchmark/egret/
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 2000;
var W_COUNT = 40;
var H_COUNT = 50;
var W_WIDTH = 640;
var H_HEIGHT = 1136;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onResourceLoadComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    Main.prototype.onResourceLoadComplete = function () {
        var textures = [];
        for (var i = 0; i < TEXTURE_COUNT; ++i) {
            textures[i] = RES.getRes(i + '_png');
        }
        var bmps = [];
        for (var i = 0; i < SPRITE_COUNT; ++i) {
            var bmp = new egret.Bitmap(textures[i % TEXTURE_COUNT]);
            bmp.width = bmp.height = 64;
            bmp.anchorOffsetX = bmp.width * 0.5;
            bmp.anchorOffsetY = bmp.height * 0.5;
            bmp.x = W_WIDTH / W_COUNT * (i % W_COUNT);
            bmp.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            this.addChild(bmp);
            bmps.push(bmp);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            for (var _i = 0, bmps_1 = bmps; _i < bmps_1.length; _i++) {
                var bmp = bmps_1[_i];
                bmp.rotation += 3;
            }
        }, this);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//显示FPS
var fpsCon = document.createElement('div');
Object['assign'](fpsCon.style, {
    position: 'fixed',
    background: '#000',
    color: '#fff',
    top: 0,
    left: 0
});
document.body.appendChild(fpsCon);
var arrFps = new Float64Array(10);
var lastTime = Date.now();
var pos = 0;
function updateFps() {
    var now = Date.now();
    var delta = now - lastTime;
    var fps = 1000 / delta;
    arrFps[pos++] = fps;
    if (pos >= arrFps.length) {
        pos = 0;
    }
    fpsCon.innerHTML = 'FPS: ' + (arrFps.reduce(function (prev, next) { return prev + next; }) / arrFps.length | 0);
    lastTime = now;
    requestAnimationFrame(updateFps);
}
requestAnimationFrame(updateFps);
