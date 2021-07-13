import { setOutro } from "./outro.js";
import { setPlayBtn } from "./playBtn.js";

export const setDoggy = (scene, doggyArr, state) => {
	doggyArr.forEach((doggy, index) => {
		// container
		const newDoggy = scene.add
			.sprite(doggy.xL, doggy.yL, "doggy")
			.setInteractive();

		newDoggy.scale = doggy.scale;
		newDoggy.flipX = doggy.flip;

		scene.anims.create({
			key: `markDog-${index}`,
			frames: scene.anims.generateFrameNumbers("circle", {
				start: 0,
				end: 7,
			}),
			frameRate: 16,
			repeat: 0,
		});

		newDoggy.on("pointerdown", () => {
			if (!doggy.detected) {
				console.log(`Good job! You find Doggy number ${index + 1}`);

				const circle = scene.add.sprite(doggy.xL, doggy.yL, "circle");
				circle.scale = doggy.scale;

				const circleAnimation = circle.play(`markDog-${index}`);

				doggy.detected = true;
				state.hiddenDogs -= 1;
				if (state.hiddenDogs === 0) {
					setOutro(scene);
					setPlayBtn(scene);
				}
			} else {
				console.log("This Doggy is already detected!");
			}
		});
	});
};
