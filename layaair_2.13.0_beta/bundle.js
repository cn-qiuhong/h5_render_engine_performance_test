(function () {
    'use strict';

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = false;
    GameConfig.init();

    class Main {
        constructor() {
            Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.Stat.show();
            var TEXTURE_COUNT = 100;
            var SPRITE_COUNT = 2000;
            var W_COUNT = 40;
            var H_COUNT = 50;
            var W_WIDTH = 640;
            var H_HEIGHT = 1136;
            var sprites = [];
            var stage = Laya.stage;
            for (var i = 0; i < SPRITE_COUNT; ++i) {
                var sprite = new Laya.Sprite();
                sprite.scale(0.25, 0.25);
                sprite.loadImage('../ims/' + (i % TEXTURE_COUNT) + '.png');
                sprite.pivot(128, 128);
                sprite.x = W_WIDTH / W_COUNT * (i % W_COUNT);
                sprite.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
                stage.addChild(sprite);
                sprites.push(sprite);
            }
            Laya.timer.frameLoop(1, this, function (e) {
                for (var _i = 0, sprites_1 = sprites; _i < sprites_1.length; _i++) {
                    var sprite = sprites_1[_i];
                    sprite.rotation += 3;
                }
            });
        }
    }
    new Main();

}());
