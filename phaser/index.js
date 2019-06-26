/**
 *
 */
var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 2000;
var W_COUNT = 40;
var H_COUNT = 50;
var W_WIDTH = 640;
var H_HEIGHT = 1136;

function preload() {
    var load = this.load;
    for (var i = 0; i < TEXTURE_COUNT; i++) {
        load.image('' + i, '../ims/' + i + '.png');
    }
}

let bmps = []
function create() {
    for (let i = 0; i < SPRITE_COUNT; ++i) {
        let x = W_WIDTH / W_COUNT * (i % W_COUNT);
        let y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
        let idx = '' + (i % 100)
        let bmp = this.add.sprite(x, y, idx)
        bmp.displayWidth = bmp.displayHeight = 64;
        bmps.push(bmp);
    }
}

function update() {
    for (let bmp of bmps)
        bmp.angle += 3;
}

window.onload = function () {
    var config = {
        width: W_WIDTH,
        height: H_HEIGHT,
        type: Phaser.AUTO,
        parent: 'content',
        scale: { mode: Phaser.Scale.ScaleModes.FIT },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    new Phaser.Game(config);
};

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