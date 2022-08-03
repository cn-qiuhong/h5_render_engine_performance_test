/**
 *
 */
var TEXTURE_COUNT = 100;
var SPRITE_COUNT = 2000;
var W_COUNT = 40;
var H_COUNT = 50;
var W_WIDTH = 640;
var H_HEIGHT = 1136;
var game;
window.onload = function () {
    game = new Game();
};
window.onresize = function () {
    var stage = game.stage;
    var sx = innerWidth / W_WIDTH;
    var sy = innerHeight / H_HEIGHT;
    var scale = Math.min(sx, sy);
    stage.scaleX = scale;
    stage.scaleY = scale;
    stage.resize(W_WIDTH, H_HEIGHT);
    var ml = (innerWidth - scale * W_WIDTH) / 2;
    if (ml < 0)
        ml = 0;
    stage.canvas.style.marginLeft = ml + 'px';
};
var Game = /** @class */ (function () {
    function Game() {
        this.asset = null;
        this.stage = null;
        this.ticker = null;
        this.sprites = [];
        this.init();
    }
    Game.prototype.init = function () {
        var _this = this;
        this.asset = new Asset();
        this.asset.on('complete', function () {
            _this.initStage();
        }, true);
        this.asset.load();
    };
    Game.prototype.initStage = function () {
        //舞台画布
        var renderType = location.search.indexOf('dom') != -1 ? 'dom' : 'canvas';
        //舞台
        var sx = innerWidth / W_WIDTH;
        var sy = innerHeight / H_HEIGHT;
        var scale = Math.min(sx, sy);
        this.stage = new Hilo.Stage({
            renderType: renderType,
            width: W_WIDTH,
            height: H_HEIGHT,
            scaleX: scale,
            scaleY: scale
        });
        document.body.appendChild(this.stage.canvas);
        var ml = (innerWidth - scale * W_WIDTH) / 2;
        if (ml < 0)
            ml = 0;
        this.stage.canvas.style.marginLeft = ml + 'px';
        //启动计时器
        this.ticker = new Hilo.Ticker(60);
        this.ticker.addTick(Hilo.Tween);
        this.ticker.addTick(this.stage);
        this.ticker.start(true);
        for (var i = 0; i < SPRITE_COUNT; ++i) {
            var id = 'im' + (i % TEXTURE_COUNT);
            var im = this.asset[id];
            var sprite = new Hilo.Bitmap({
                id: 'im' + i,
                image: im,
                scaleX: 0.25,
                scaleY: 0.25,
                pivotX: 128,
                pivotY: 128,
                x: W_WIDTH / W_COUNT * (i % W_COUNT),
                y: H_HEIGHT / H_COUNT * (i / W_COUNT | 0)
            });
            this.stage.addChild(sprite);
            this.sprites.push(sprite);
        }
        //舞台更新
        this.stage.onUpdate = this.onUpdate.bind(this);
    };
    Game.prototype.onUpdate = function (delta) {
        for (var _i = 0, _a = this.sprites; _i < _a.length; _i++) {
            var s = _a[_i];
            s.rotation += 3;
        }
    };
    return Game;
}());
