import { sizeL } from "./MainScene.js";
import { overlay } from "./overlay.js";

export const setOutro = (scene) =>
	overlay(
		"fadeIn",
		[
			{
				xL: sizeL.width / 2,
				yL: sizeL.height * 0.6,
				text: "Can you solve \nevery mystery?",
				colorArr: ["#ffffff"],
				config: {
					fontSize: "70px",
					fontFamily: "Arial",
					fontStyle: "bold",
				},
			},
			{
				xL: sizeL.width / 2,
				yL: sizeL.height * 0.41,
				text: "Great Job",
				colorArr: ["#ccccaa", "#dddd33"],
				config: {
					fontSize: 100,
					fontFamily: "Arial",
					fontStyle: "bold",
				},
			},
		],
		[
			{
				xL: sizeL.width / 3,
				yL: sizeL.height,
				title: "char",
				scale: 0.87,
				origin: 1,
			},
			{
				xL: sizeL.width / 2,
				yL: sizeL.height / 5,
				title: "logo",
			},
		],
		scene,
		sizeL
	);
