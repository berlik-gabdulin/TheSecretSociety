import MainScene, { sizeL } from "./MainScene.js";

const config = {
	type: Phaser.AUTO,
	width: sizeL.width,
	height: sizeL.height,
	backgroundColor: "#333",
	parent: "app",
	scene: [MainScene],
	transparent: true,
};

new Phaser.Game(config);
