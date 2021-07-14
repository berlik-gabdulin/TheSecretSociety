import { sizeL, sizeP, state } from "./MainScene.js";
import { overlay } from "./overlay.js";
import { rotateHandler } from "./rotateHandler.js";

export const setPlayBtn = (scene) => {
	// Setup play Btn
	const playBtn = scene.add.sprite(0, 0, "btn");

	playBtn.portrait = { x: sizeP.width / 2, y: sizeP.height - 120 };
	playBtn.landscape = { x: sizeL.width / 2, y: sizeL.height - 80 };

	const playText = scene.add.text(0, 0, "Play Now").setInteractive();

	const textConfigL = {
		fontSize: "45px",
		color: "#ffffaa",
		fontFamily: "Arial",
		fontStyle: "bold",
	};
	const textConfigP = {
		fontSize: "45px",
		color: "#ffffaa",
		fontFamily: "Arial",
		fontStyle: "bold",
	};

	playText.portrait = {
		x: sizeP.width / 2,
		y: sizeP.height - 120,
		config: textConfigP,
	};
	playText.landscape = {
		x: sizeL.width / 2,
		y: sizeL.height - 80,
		config: textConfigL,
	};

	const btnContainer = scene.add.container(0, 0, [playBtn, playText]);
	playText.on("pointerdown", () => {
		window.open("https://www.g5e.com/");
	});

	state.objects.push(playBtn, playText);
};
