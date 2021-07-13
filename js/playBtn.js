import { sizeL, state } from "./MainScene.js";
import { overlay } from "./overlay.js";

export const setPlayBtn = (scene) => {
	// Setup play Btn
	const playBtn = scene.add.sprite(sizeL.width / 2, sizeL.height - 80, "btn");
	const playText = scene.add
		.text(playBtn.x, playBtn.y, "Play Now", {
			fontSize: "45px",
			color: "#ffffaa",
			fontFamily: "Arial",
			fontStyle: "bold",
		})
		.setOrigin(0.5)
		.setInteractive();

	const btnContainer = scene.add.container(0, 0, [playBtn, playText]);
	playText.on("pointerdown", () => {
		window.open("https://www.g5e.com/");
	});
};
