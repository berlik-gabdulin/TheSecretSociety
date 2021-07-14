import { sprites, doggyArr } from "./assets.js";
import { setDoggy } from "./doggy.js";
import { setIntro } from "./intro.js";
import { setOutro } from "./outro.js";
import { overlay } from "./overlay.js";
import { setPlayBtn } from "./playBtn.js";
import { rotateHandler } from "./rotateHandler.js";

export const sizeL = {
	width: 1075,
	height: 767,
};

export const sizeP = {
	width: 767,
	height: 1075,
};

export const state = {
	intro: true,
	hiddenDogs: 5,
	outro: false,
	objects: [],
};

export default class MainScene extends Phaser.Scene {
	constructor() {
		super("MainScene");
	}

	preload() {
		console.log("preload()");
		sprites.map((sprite) => {
			sprite.type === "image"
				? this.load.image(sprite.title, sprite.src)
				: this.load.spritesheet(sprite.title, sprite.src, sprite.config);
		});
	}

	create() {
		console.log("create()");

		// Background
		let container, back;

		const setBackground = (scene, bgImg) => {
			// Background init
			container = scene.add.container(sizeL.width / 2, sizeL.height / 2);
			back = scene.add.image(0, 0, bgImg);

			if (window.innerHeight < window.innerWidth) {
				back.setScale(1);
			} else if (window.innerHeight > window.innerWidth) {
				back.setScale(1.8);
			}

			scene.scale.on("orientationchange", (orientation) => {
				if (orientation === Phaser.Scale.PORTRAIT) {
					back.setScale(1.8);
				} else {
					back.setScale(1);
				}
			});

			back.portrait = { x: -sizeP.width / 2.5, y: 0 };
			back.landscape = { x: 0, y: 0 };

			container.add(back);
			state.objects.push(back);
		};

		setBackground(this, "background");
		setDoggy(this, doggyArr);
		setIntro(this);
		setPlayBtn(this);
		rotateHandler(this);
	}

	update() {
		// console.log("update()");
	}
}
