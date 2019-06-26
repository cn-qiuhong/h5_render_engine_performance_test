/**
 * 
 */

const TEXTURE_COUNT = 100;
const SPRITE_COUNT = 2000;
const W_COUNT = 40;
const H_COUNT = 50;
const W_WIDTH = 640;
const H_HEIGHT = 1136;

class SimpleGame {
    game: Phaser.Game;
    constructor() {
        let config: Phaser.Types.Core.GameConfig = {
            width: 640,
            height: 1136,
            type: Phaser.AUTO,
            parent: 'content',
            scale: { mode: Phaser.Scale.ScaleModes.FIT },
            scene: {
                preload: this.preload,
                create: this.create
            }
        }
        this.game = new Phaser.Game(config)
    }

    preload() {
        let scene: Phaser.Scene = <any>this
        let load = scene.load
        for (let i = 0; i < TEXTURE_COUNT; i++) {
            load.image('' + i, 'ims/' + i + '.png')
        }
    }

    create() {
        let scene: Phaser.Scene = <any>this

        let bmps: Phaser.GameObjects.Sprite[] = []
        for (let i = 0; i < SPRITE_COUNT; ++i) {
            let x = W_WIDTH / W_COUNT * (i % W_COUNT);
            let y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
            let idx = '' + (i % 100)
            let bmp = scene.add.sprite(x, y, idx)
            bmp.width = bmp.height = 64;
            bmps.push(bmp);
        }

        scene.game.loop.callback = () => {
            for (let bmp of bmps) {
                bmp.angle += 3;
            }
        };
    }
}

window.onload = () => {
    new SimpleGame()
}