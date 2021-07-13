export const sprites = [
	{
		type: "image",
		title: "background",
		src: "assets/back_five_dogs.jpg",
	},
	{
		type: "image",
		title: "btn",
		src: "assets/btn.png",
	},
	{
		type: "image",
		title: "doggy",
		src: "assets/doggy.png",
	},
	{
		type: "image",
		title: "logo",
		src: "assets/logo.png",
	},
	{
		type: "image",
		title: "char",
		src: "assets/char.png",
	},
	{
		type: "image",
		title: "sparkle",
		src: "assets/sparkle.png",
	},
	{
		type: "spritesheet",
		title: "circle",
		src: "assets/circle.png",
		config: {
			frameWidth: 165,
			frameHeight: 184,
		},
	},
];

// xL, yL - landscape position, xP, yP - portrait position
export const doggyArr = [
	{
		xL: 170,
		yL: 260,
		xP: 170,
		yP: 260,
		scale: 0.75,
		flip: true,
		detected: false,
	},
	{
		xL: 260,
		yL: 600,
		xP: 260,
		yP: 600,
		scale: 0.9,
		flip: false,
		detected: false,
	},
	{
		xL: 970,
		yL: 260,
		xP: 970,
		yP: 260,
		scale: 0.65,
		flip: false,
		detected: false,
	},
	{
		xL: 980,
		yL: 570,
		xP: 980,
		yP: 570,
		scale: 0.75,
		flip: false,
		detected: false,
	},
	{
		xL: 530,
		yL: 330,
		xP: 530,
		yP: 330,
		scale: 0.55,
		flip: true,
		detected: false,
	},
];
