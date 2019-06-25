import GameConfig from "./GameConfig";

const TEXTURE_COUNT = 100;
const SPRITE_COUNT = 2000;
const W_COUNT = 40;
const H_COUNT = 50;
const W_WIDTH = 640;
const H_HEIGHT = 1136;

class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya.stage.scaleMode = GameConfig.scaleMode;

		//  Laya.Stat.show();

		this.loadRes()
	}

	private loadRes() {
		let arr = []
		for (let i = 0; i < TEXTURE_COUNT; ++i) {
			arr.push('ims/' + i + '.png')
		}
		Laya.loader.load(arr, new Laya.Handler(this, this.loadComplete))
	}

	private loadComplete() {
		let textures: any[] = [];
		for (let i = 0; i < TEXTURE_COUNT; ++i) {
			textures[i] = Laya.loader.getRes('ims/' + i + '.png');
		}

		let bmps: Laya.Sprite[] = []
		let stage = Laya.stage
		for (let i = 0; i < SPRITE_COUNT; ++i) {
			let bmp = new Laya.Sprite();
			bmp.texture = textures[i % TEXTURE_COUNT]
			bmp.width = bmp.height = 64;
			bmp.pivotX = bmp.width * 0.5;
			bmp.pivotY = bmp.height * 0.5;
			bmp.x = W_WIDTH / W_COUNT * (i % W_COUNT);
			bmp.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
			stage.addChild(bmp);
			bmps.push(bmp);
		}

		Laya.timer.frameLoop(1, null, e => {
			for (let bmp of bmps) {
				bmp.rotation += 3;
			}
		});
	}
}
//激活启动类
new Main();

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