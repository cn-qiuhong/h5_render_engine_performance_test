/**
 *
 */
var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 2000;
var W_COUNT = 40;
var H_COUNT = 50;
var W_WIDTH = 640;
var H_HEIGHT = 1136;

var bmps = []

function create() {
    var scene = this
    var load = this.load
    load.crossOrigin = 'anonymous'
    load.addListener(Phaser.Loader.Events.FILE_COMPLETE, function() {
        var j = +arguments[0]
        for (var i = j; i < SPRITE_COUNT; i += 100) {
            var x = W_WIDTH / W_COUNT * (i % W_COUNT);
            var y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            var idx = '' + (i % 100)
            var bmp = scene.add.image(x, y, idx)
            bmp.displayWidth = bmp.displayHeight = 64;
            bmps.push(bmp);
        }
    })
    for (var i = 0; i < TEXTURE_COUNT; i++) {
        load.image('' + i, '../ims/' + i + '.png');
    }
    load.start()
}

var rotation = 0

function update() {
    rotation += 3
    rotation %= 360
    for (var bmp of bmps)
        bmp.angle = rotation
}

window.onload = function() {
    var config = {
        width: W_WIDTH,
        height: H_HEIGHT,
        type: Phaser.AUTO,
        parent: 'content',
        scale: { mode: Phaser.Scale.ScaleModes.FIT },
        scene: {
            create: create,
            update: update
        }
    };
    new Phaser.Game(config);
};

//显示FPS
var fpsCon = document.createElement('div');
Object['assign'](fpsCon.style, {
    position: 'fixed',
    background: '#000',
    color: '#fff',
    top: 0,
    left: 0
})
document.body.appendChild(fpsCon);
var arrFps = new Float64Array(100);
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
    fpsCon.innerHTML = 'FPS: ' + Math.round(arrFps.reduce((prev, next) => prev + next) / arrFps.length | 0);
    lastTime = now;
    requestAnimationFrame(updateFps);
}
requestAnimationFrame(updateFps);