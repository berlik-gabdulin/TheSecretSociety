import { sizeL, sizeP } from "./MainScene.js";
import { overlay } from "./overlay.js";

const textGreatConfigL = {
	fontSize: "100px",
	fontFamily: "Arial",
	fontStyle: "bold",
};
const textGreatConfigP = {
	fontSize: "100px",
	fontFamily: "Arial",
	fontStyle: "bold",
};
const textConfigL = {
	fontSize: "70px",
	fontFamily: "Arial",
	fontStyle: "bold",
};
const textConfigP = {
	fontSize: "70px",
	fontFamily: "Arial",
	fontStyle: "bold",
};

export const setOutro = (scene) =>
	overlay(
		"fadeIn",
		[
			{
				landscape: {
					x: sizeL.width / 2,
					y: sizeL.height * 0.41,
					config: textGreatConfigL,
				},
				portrait: {
					x: sizeP.width / 2,
					y: sizeP.height * 0.55,
					config: textGreatConfigP,
				},
				text: "Great Job",
				colorArr: ["#FFFF9E", "#F7C368"],
			},
			{
				landscape: {
					x: sizeL.width / 2,
					y: sizeL.height * 0.6,
					config: textConfigL,
				},
				portrait: {
					x: sizeP.width / 2,
					y: sizeP.height * 0.7,
					config: textConfigP,
				},
				text: "Can you solve \nevery mystery?",
				colorArr: ["#ffffff"],
			},
		],
		[
			{
				landscape: {
					x: sizeL.width / 5,
					y: sizeL.height * 0.6,
					originY: 1,
					scale: 0.87,
				},
				portrait: {
					x: sizeP.width / 2,
					y: sizeP.height * 0.65,
					originY: 1,
					flipX: true,
					scale: 1,
				},
				title: "char",
			},
			{
				landscape: { x: sizeL.width / 2, y: sizeL.height / 5 },
				portrait: { x: sizeP.width / 2, y: sizeP.height / 6 },
				title: "logo",
			},
		],
		scene,
		sizeL
	);
