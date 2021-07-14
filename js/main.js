import MainScene, { sizeL, sizeP } from "./MainScene.js";

const config = {
	type: Phaser.AUTO,
	width: window.innerHeight < window.innerWidth ? sizeL.width : sizeP.width,
	height: window.innerHeight < window.innerWidth ? sizeL.height : sizeP.height,
	backgroundColor: "#333",
	parent: "app",
	scene: [MainScene],
	transparent: true,
};

const game = new Phaser.Game(config);
