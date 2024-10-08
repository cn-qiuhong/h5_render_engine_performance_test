
const { ccclass, property } = cc._decorator;

const TEXTURE_COUNT = 100;
const SPRITE_COUNT = 2000;
const W_COUNT = 40;
const H_COUNT = 50;
const W_WIDTH = 640;
const H_HEIGHT = 1136;

@ccclass
export default class Main extends cc.Component {
    onLoad() {
        let stage = this.node

        let bmps: cc.Node[] = []
        for (let i = 0; i < SPRITE_COUNT; ++i) {
            let bmp = new cc.Node()
            bmp.anchorX = 0.5;
            bmp.anchorY = 0.5;
            bmp.x = W_WIDTH / W_COUNT * (i % W_COUNT) - 320;
            bmp.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0) - 568;
            stage.addChild(bmp);
            bmps.push(bmp);
        }

        for (let i = 0; i < TEXTURE_COUNT; i++) {
            cc.loader.load('https://cn-qiuhong.github.io/performanceTest/ims/' + i + '.png', (e, t) => {
                let sf = new cc.SpriteFrame(t)
                for (let j = i; j < SPRITE_COUNT; j += 100) {
                    let n = bmps[j]
                    let sprit = n.addComponent(cc.Sprite)
                    sprit.spriteFrame = sf
                    n.width = n.height = 64
                }
            })
        }


        this.schedule(() => {
            for (let bmp of bmps) {
                bmp.rotation += 3;
            }
        }, 0);
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