import { state } from "./MainScene.js";
import { setOutro } from "./outro.js";
import { setPlayBtn } from "./playBtn.js";
import { rotateHandler } from "./rotateHandler.js";
import { setKeys } from "./setKeys.js";

export const setDoggy = (scene, doggyArr) => {
	doggyArr.forEach((doggy, index) => {
		// container
		const newDoggy = scene.add.sprite(0, 0, "doggy").setInteractive();

		setKeys(newDoggy, doggy);

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

				const circle = scene.add.sprite(0, 0, "circle");
				circle.scale = doggy.scale;
				circle.name = "circle";
				circle.portrait = doggy.portrait;
				circle.landscape = doggy.landscape;

				const circleAnimation = circle.play(`markDog-${index}`);

				doggy.detected = true;
				state.hiddenDogs -= 1;
				if (state.hiddenDogs === 0) {
					setOutro(scene);
					setPlayBtn(scene);
				}

				state.objects.push(circle);
				rotateHandler(scene);
				console.log(state.objects);
			} else {
				console.log("This Doggy is already detected!");
			}
		});

		state.objects.push(newDoggy);
	});
};
