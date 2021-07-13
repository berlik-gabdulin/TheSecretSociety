import { sizeL } from "./MainScene.js";
import { overlay } from "./overlay.js";

const textConfig = {
	fontSize: "80px",
	color: "#ffffff",
	fontFamily: "Arial",
	fontStyle: "bold",
};

export const setIntro = (scene) =>
	overlay(
		"fadeOut",
		[
			{
				xL: sizeL.width / 2 - 50,
				yL: sizeL.height * 0.4,
				text: "5 Hidden Dogs",
				colorArr: ["#ffffff"],
				config: textConfig,
			},
			{
				xL: sizeL.width / 2,
				yL: sizeL.height * 0.6,
				text: "Can you spot them?",
				colorArr: ["#ffffff"],
				config: textConfig,
			},
		],
		[
			{
				xL: (sizeL.width / 4) * 3,
				yL: sizeL.height * 0.4,
				title: "doggy",
				scale: 1.3,
				flip: true,
				origin: 0.5,
			},
		],
		scene,
		sizeL
	);
