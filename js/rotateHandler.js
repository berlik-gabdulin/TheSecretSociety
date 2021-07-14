import { sizeL, sizeP, state } from "./MainScene.js";

const initOrientation =
	window.innerHeight < window.innerWidth ? "landscape" : "portrait";

const rotateHandlerOnLoad = (scene, orientation) => {
	state.objects.map((item) => {
		if (item.type === "Text") {
			item.setPosition(item[orientation].x, item[orientation].y);
			item.setOrigin(item[orientation].origin);
			item.setFlipX(item[orientation].flipX);
			item.setFontSize(item[orientation].config.fontSize);
			item.setScale(item[orientation].config.scale);
			item.setFontFamily(item[orientation].config.fontFamily);
			item.setFontStyle(item[orientation].config.fontStyle);
			console.log(item.color);
		} else {
			for (let key in item[orientation]) {
				item[key] = item[orientation][key];
			}
		}
		return item;
	});
	orientation === "portrait"
		? scene.scale.resize(sizeP.width, sizeP.height)
		: scene.scale.resize(sizeL.width, sizeL.height);
};

export const rotateHandler = (scene) => {
	rotateHandlerOnLoad(scene, initOrientation);
	scene.scale.on("orientationchange", (orientation) => {
		if (orientation === Phaser.Scale.PORTRAIT) {
			return rotateHandlerOnLoad(scene, "portrait");
		} else if (orientation === Phaser.Scale.LANDSCAPE) {
			return rotateHandlerOnLoad(scene, "landscape");
		}
	});
};
