"use strict";
/**
 *
 */
var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 2000;
var W_COUNT = 40;
var H_COUNT = 50;
var W_WIDTH = 640;
var H_HEIGHT = 1136;
var SimpleGame = /** @class */ (function () {
    function SimpleGame() {
        var config = {
            width: 640,
            height: 1136,
            type: Phaser.AUTO,
            parent: 'content',
            scale: { mode: Phaser.Scale.ScaleModes.FIT },
            scene: {
                preload: this.preload,
                create: this.create
            }
        };
        this.game = new Phaser.Game(config);
    }
    SimpleGame.prototype.preload = function () {
        var scene = this;
        var load = scene.load;
        for (var i = 0; i < TEXTURE_COUNT; i++) {
            load.image('' + i, 'ims/' + i + '.png');
        }
    };
    SimpleGame.prototype.create = function () {
        var scene = this;
        var bmps = [];
        for (var i = 0; i < SPRITE_COUNT; ++i) {
            var x = W_WIDTH / W_COUNT * (i % W_COUNT);
            var y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            var idx = '' + (i % 100);
            var bmp = scene.add.sprite(x, y, idx);
            bmp.width = bmp.height = 64;
            bmps.push(bmp);
        }
        scene.game.loop.callback = function () {
            for (var _i = 0, bmps_1 = bmps; _i < bmps_1.length; _i++) {
                var bmp = bmps_1[_i];
                bmp.angle += 3;
            }
        };
    };
    return SimpleGame;
}());
window.onload = function () {
    new SimpleGame();
};
