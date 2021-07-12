export const sizeL = {
	width: 1075,
	height: 767,
};

export const sizeP = {
	width: 767,
	height: 1075,
};

export default class MainScene extends Phaser.Scene {
	constructor() {
		super("MainScene");
	}

	preload() {
		console.log("preload()");
		this.load.image("background", "assets/back_five_dogs.jpg");
		this.load.image("btn", "assets/btn.png");
		this.load.image("doggy", "assets/doggy.png");
		this.load.image("logo", "assets/logo.png");
		this.load.image("char", "assets/char.png");
		this.load.image("sparkle", "assets/sparkle.png");
		this.load.spritesheet("circle", "assets/circle.png", {
			frameWidth: 165,
			frameHeight: 184,
		});
	}

	create() {
		console.log("create()");

		// Background
		let container, back;

		// Play btn
		let playBtn, playText, btnContainer;

		// Intro
		let rectangle, textConfig, text1, text2, doggy, textContainer, introWrapper;

		let char, logo, outroWrapper;

		// Doggy
		let doggyArr;

		const state = {
			intro: true,
			hiddenDogs: 5,
			outro: false,
		};

		doggyArr = [
			{ x: 170, y: 260, scale: 0.75, flip: true, detected: false },
			{ x: 260, y: 600, scale: 0.9, flip: false, detected: false },
			{ x: 970, y: 260, scale: 0.65, flip: false, detected: false },
			{ x: 980, y: 570, scale: 0.75, flip: false, detected: false },
			{ x: 530, y: 330, scale: 0.55, flip: true, detected: false },
		];

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

		const setPlayBtn = () => {
			// Setup play Btn
			playBtn = this.add.sprite(sizeL.width / 2, sizeL.height - 80, "btn");
			playText = this.add
				.text(playBtn.x, playBtn.y, "Play Now", {
					fontSize: "45px",
					color: "#ffffaa",
					fontFamily: "Arial",
					fontStyle: "bold",
				})
				.setOrigin(0.5)
				.setInteractive();

			btnContainer = this.add.container(0, 0, [playBtn, playText]);
			playText.on("pointerdown", () => {
				if (state.intro) {
					console.log("Lets Play!!!");
					// this.cameras.main.fadeIn(1000, 0, 0, 0, 0);
					this.tweens.add({
						targets: [introWrapper],
						repeat: 0,
						alpha: 0,
						duration: 1000,
					});

					state.intro = false;
				} else {
					window.open("https://www.g5e.com/");
				}
			});
		};

		const setIntro = () => {
			// Overlay
			rectangle = this.add.rectangle(
				sizeL.width / 2,
				sizeL.height / 2,
				sizeL.width,
				sizeL.height,
				"#ff0000",
				0.8
			);
			textConfig = {
				fontSize: "80px",
				color: "#ffffff",
				fontFamily: "Arial",
				fontStyle: "bold",
			};

			// Intro text
			text1 = this.add
				.text(
					sizeL.width / 2 - 50,
					sizeL.height * 0.4,
					"5 Hidden Dogs",
					textConfig
				)
				.setOrigin(0.5);

			text2 = this.add
				.text(
					sizeL.width / 2,
					sizeL.height * 0.6,
					"Can you spot them?",
					textConfig
				)
				.setOrigin(0.5);
			doggy = this.add
				.sprite(text1.x / 2 + text1.width, text1.y, "doggy")
				.setScale(1.3)
				.setFlip(true)
				.setOrigin(0.5);

			textContainer = this.add.container(0, 0, [text1, text2, doggy]);

			this.tweens.add({
				targets: [textContainer],
				// ease: "Sine.inOut",
				yoyo: false,
				repeat: 0,
				alpha: 0,
				duration: 1000,
			});

			introWrapper = this.add.container(0, 0, [rectangle, text1, text2, doggy]);
		};

		const setOutro = () => {
			// Overlay
			rectangle = this.add.rectangle(
				sizeL.width / 2,
				sizeL.height / 2,
				sizeL.width,
				sizeL.height,
				"#ff0000",
				0.8
			);
			textConfig = {
				fontSize: "70px",
				color: "#ffffff",
				fontFamily: "Arial",
				fontStyle: "bold",
			};

			// Intro text
			text1 = this.add
				.text(
					sizeL.width / 2,
					sizeL.height * 0.6,
					"Can you solve \nevery mystery?",
					textConfig
				)
				.setOrigin(0.5);
			text1.width = 400;

			let grd = text2.context.createLinearGradient(0, 0, 0, text2.height);

			//  Add in 2 color stops
			grd.addColorStop(0, "#ccccaa");
			grd.addColorStop(1, "#dddd33");

			text2 = this.add
				.text(sizeL.width / 2, sizeL.height * 0.41, "Great Job", {
					fontSize: 100,
					color: "#ffffaa",
					fontFamily: "Arial",
					fontStyle: "bold",
					fill: grd,
				})
				.setOrigin(0.5);

			char = this.add
				.sprite(sizeL.width / 3, sizeL.height, "char")
				.setScale(0.87)
				.setFlip(false)
				.setOrigin(1, 1);
			char.height = sizeL.height - 20;

			logo = this.add
				.sprite(sizeL.width / 2, sizeL.height / 5, "logo")
				.setScale(1);
			// .setOrigin(1, 1);

			outroWrapper = this.add.container(0, 0, [
				rectangle,
				char,
				logo,
				text1,
				text2,
			]);

			outroWrapper.alpha = 0;

			this.tweens.add({
				targets: [outroWrapper],
				// ease: "Sine.inOut",
				yoyo: false,
				repeat: 0,
				alpha: 1,
				duration: 1000,
				delay: 1000,
			});
		};

		const setDoggy = () => {
			doggyArr.forEach((doggy, index) => {
				// container
				const newDoggy = this.add
					.sprite(doggy.x, doggy.y, "doggy")
					.setInteractive();

				newDoggy.scale = doggy.scale;
				newDoggy.flipX = doggy.flip;

				this.anims.create({
					key: `markDog-${index}`,
					frames: this.anims.generateFrameNumbers("circle", {
						start: 0,
						end: 7,
					}),
					frameRate: 16,
					repeat: 0,
				});

				newDoggy.on("pointerdown", () => {
					if (!doggy.detected) {
						console.log(`Good job! You find Doggy number ${index + 1}`);
						const circle = this.add.sprite(doggy.x, doggy.y, "circle");
						circle.scale = doggy.scale;

						const circleAnimation = circle.play(`markDog-${index}`);

						doggy.detected = true;
						state.hiddenDogs -= 1;
						if (state.hiddenDogs === 0) {
							setOutro();
							setPlayBtn();
						}
					} else {
						console.log("This Doggy is already detected!");
					}
				});
			});
		};

		setBackground(this, sizeL, "background");
		setDoggy();
		setIntro();
		setPlayBtn();

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
