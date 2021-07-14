import { sizeL, sizeP, state } from "./MainScene.js";
import { setKeys } from "./setKeys.js";

export const overlay = (fade, texts, sprites, scene) => {
	// Overlay
	let rectangle = scene.add.rectangle(
		sizeL.width / 2,
		sizeL.height / 2,
		sizeL.width * 3,
		sizeL.height * 3,
		"#ff0000",
		0.8
	);

	const container = scene.add.container(0, 0);

	container.add(rectangle);

	sprites.map((item) => {
		let sprite = scene.add.sprite(0, 0, item.title);

		setKeys(sprite, item);

		container.add(sprite);
		state.objects.push(sprite);
	});

	texts.map((text) => {
		const overlayText = scene.add
			.text(0, 0, text.text)
			.setOrigin(text.origin ? text.origin : 0.5);

		let fillColor = overlayText.context.createLinearGradient(0, 0, 0, 300);
		console.log("overlayText: ", overlayText.height);

		if (text.colorArr.length > 1) {
			text.colorArr.map((color, index) => {
				fillColor.addColorStop(index, color);
				console.log("fillColor: ", fillColor);
			});
		} else {
			fillColor = text.colorArr[0];
		}

		overlayText.setColor(fillColor);
		overlayText.fillColor = fillColor;
		overlayText.width = text.width ? text.width : sizeL.width;
		overlayText.height = text.height ? text.height : sizeL.height;

		setKeys(overlayText, text);

		container.add(overlayText);

		state.objects.push(overlayText);
	});

	container.alpha = fade === "fadeIn" ? 0 : 1;

	scene.tweens.add({
		targets: [container],
		// ease: "Sine.inOut",
		yoyo: false,
		repeat: 0,
		alpha: fade === "fadeIn" ? 1 : 0,
		duration: 1000,
		delay: 1000,
	});
};
