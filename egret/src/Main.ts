/**
 * 代码及图片素材来自于：https://k8w.github.io/webgl_2d_benchmark/egret/
 */

const TEXTURE_COUNT = 100;
const SPRITE_COUNT = 2000;
const W_COUNT = 40;
const H_COUNT = 50;
const W_WIDTH = 640;
const H_HEIGHT = 1136;

class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();

        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onResourceLoadComplete, this)
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    private onResourceLoadComplete(): void {
        let textures: any[] = [];
        for (let i = 0; i < TEXTURE_COUNT; ++i) {
            textures[i] = RES.getRes(i + '_png');
        }

        let bmps: egret.Bitmap[] = []
        for (let i = 0; i < SPRITE_COUNT; ++i) {
            let bmp = new egret.Bitmap(textures[i % TEXTURE_COUNT]);
            bmp.width = bmp.height = 64;
            bmp.anchorOffsetX = bmp.width * 0.5;
            bmp.anchorOffsetY = bmp.height * 0.5;
            bmp.x = W_WIDTH / W_COUNT * (i % W_COUNT);
            bmp.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            this.addChild(bmp);
            bmps.push(bmp);
        }

        this.addEventListener(egret.Event.ENTER_FRAME, () => {
            for (let bmp of bmps) {
                bmp.rotation += 3;
            }
        }, this);
    }

}

//显示FPS
let fpsCon = document.createElement('div');
Object['assign'](fpsCon.style, {
    position: 'fixed',
    background: '#000',
    color: '#fff',
    top: 0,
    left: 0
})
document.body.appendChild(fpsCon);
let arrFps = new Float64Array(10);
let lastTime = Date.now();
let pos = 0;
function updateFps() {
    let now = Date.now();
    let delta = now - lastTime;
    let fps = 1000 / delta;
    arrFps[pos++] = fps;
    if (pos >= arrFps.length) {
        pos = 0;
    }
    fpsCon.innerHTML = 'FPS: ' + (arrFps.reduce((prev, next) => prev + next) / arrFps.length | 0);
    lastTime = now;
    requestAnimationFrame(updateFps);
}
requestAnimationFrame(updateFps);