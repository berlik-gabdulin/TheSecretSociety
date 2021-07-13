import { sprites, doggyArr } from "./assets.js";
import { setDoggy } from "./doggy.js";
import { setIntro } from "./intro.js";
import { overlay } from "./overlay.js";
import { setPlayBtn } from "./playBtn.js";

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

		const setBackground = (scene, sizeL, bgImg) => {
			// Background init
			container = scene.add.container(sizeL.width / 2, sizeL.height / 2);
			back = scene.add.image(0, 0, bgImg);
			container.width = sizeL.width / 2;
			container.height = sizeL.height / 2;

			back.width = sizeL.width / 2;
			back.height = sizeL.height / 2;
			container.add(back);
		};

		setBackground(this, sizeL, "background");
		setDoggy(this, doggyArr, state);
		setIntro(this);
		setPlayBtn(this);

		this.scale.on("orientationchange", function (orientation) {
			if (orientation === Phaser.Scale.PORTRAIT) {
				console.log("Phaser.Scale.PORTRAIT");
			} else if (orientation === Phaser.Scale.LANDSCAPE) {
				console.log("Phaser.Scale.LANDSCAPE");
			}
		});
	}

	update() {
		// console.log("update()");
	}
}
