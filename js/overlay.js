export const overlay = (fade, texts, sprites, scene, sizeL) => {
	// Overlay
	const rectangle = scene.add.rectangle(
		sizeL.width / 2,
		sizeL.height / 2,
		sizeL.width,
		sizeL.height,
		"#ff0000",
		0.8
	);

	const container = scene.add.container(0, 0);

	container.add(rectangle);

	sprites.map((item) => {
		let sprite = scene.add
			.sprite(item.xL, item.yL, item.title)
			.setScale(item.scale ? item.scale : 1)
			.setFlip(item.flip ? item.flip : false)
			.setOrigin(item.origin ? item.origin : 0.5);

		container.add(sprite);
	});

	texts.map((text) => {
		let overlayText;
		let fillColor;

		overlayText = scene.add
			.text(text.xL, text.yL, text.text, {
				fontSize: text?.config?.fontSize,
				fontFamily: text?.config?.fontFamily,
				fontStyle: text?.config?.fontStyle,
				// fill: fillColor ? fillColor : "#ffffff",
			})
			.setOrigin(text.origin ? text.origin : 0.5);

		fillColor = overlayText.context.createLinearGradient(
			0,
			0,
			0,
			overlayText.height
		);

		fillColor.addColorStop(0, "#2335ff");
		fillColor.addColorStop(1, "#549900");
		// if (text.colorArr.length > 1) {
		// 	text.colorArr.map((color, index) => {
		// 		fillColor.addColorStop(index, color);
		// 	});
		// 	overlayText.style.fill = fillColor;
		// }
		overlayText.width = text.width ? text.width : sizeL.width;
		overlayText.height = text.height ? text.height : sizeL.height;

		overlayText.width = text.width;

		container.add(overlayText);
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
