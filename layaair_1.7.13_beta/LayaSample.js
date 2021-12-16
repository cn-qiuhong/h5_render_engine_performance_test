var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 2000;
var W_COUNT = 40;
var H_COUNT = 50;
var W_WIDTH = 640;
var H_HEIGHT = 1136;
// 程序入口
var GameMain = /** @class */ (function() {
    function GameMain() {
        // Laya.init(640, 1136, Laya.WebGL);
        Laya.init(640, 1136);
        Laya.Stat.show();
        Laya.stage.bgColor = "#232628";
        Laya.stage.scaleMode = 'showall';
        var sprites = [];
        var stage = Laya.stage;
        for (var i = 0; i < SPRITE_COUNT; ++i) {
            var sprite = new Laya.Sprite();
            sprite.loadImage('../ims/' + (i % TEXTURE_COUNT) + '.png');
            sprite.scale(0.25, 0.25);
            sprite.pivot(128, 128);
            sprite.x = W_WIDTH / W_COUNT * (i % W_COUNT);
            sprite.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            stage.addChild(sprite);
            sprites.push(sprite);
        }
        Laya.timer.frameLoop(1, this, function(e) {
            for (var _i = 0, sprites_1 = sprites; _i < sprites_1.length; _i++) {
                var sprite = sprites_1[_i];
                sprite.rotation += 3;
            }
        });
    }
    return GameMain;
}());
new GameMain();