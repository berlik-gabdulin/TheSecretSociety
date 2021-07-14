import { sizeL, sizeP } from "./MainScene.js";
import { overlay } from "./overlay.js";

const textConfigL = {
	fontSize: "80px",
	color: "#ffffff",
	fontFamily: "Arial",
	fontStyle: "bold",
};
const textConfigP = {
	fontSize: "60px",
	color: "#ffffff",
	fontFamily: "Arial",
	fontStyle: "bold",
};

export const setIntro = (scene) =>
	overlay(
		"fadeOut",
		[
			{
				landscape: {
					x: sizeL.width / 2 - 50,
					y: sizeL.height * 0.4,
					origin: 0.5,
					config: textConfigL,
				},
				portrait: {
					x: sizeP.width / 2 - 60,
					y: sizeP.height * 0.45,
					origin: 0.5,
					config: textConfigP,
				},
				text: "5 Hidden Dogs",
				colorArr: ["#ffffff"],
			},
			{
				landscape: {
					x: sizeL.width / 2,
					y: sizeL.height * 0.6,
					origin: 0.5,
					config: textConfigL,
				},
				portrait: {
					x: sizeP.width / 2,
					y: sizeP.height * 0.6,
					origin: 0.5,
					config: textConfigP,
				},
				text: "Can you spot them?",
				colorArr: ["#ffffff"],
			},
		],
		[
			{
				landscape: {
					x: (sizeL.width / 4) * 3,
					y: sizeL.height * 0.4,
					scale: 1.3,
					flipX: true,
					origin: 0.5,
				},
				portrait: {
					x: sizeP.width * 0.8,
					y: sizeP.height * 0.45,
					scale: 1.3,
					flipX: false,
					origin: 0.5,
				},
				title: "doggy",
			},
		],
		scene,
		sizeL
	);
