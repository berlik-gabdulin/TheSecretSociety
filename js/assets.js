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
		landscape: { x: 170, y: 260, scale: 0.75, flipX: true },
		portrait: { x: 190, y: 110, scale: 0.75, flipX: true },
		detected: false,
	},
	{
		landscape: { x: 260, y: 600, scale: 0.9, flipX: false },
		portrait: { x: 180, y: 530, scale: 0.9, flipX: true },
		detected: false,
	},
	{
		landscape: { x: 970, y: 260, scale: 0.65, flipX: false },
		portrait: { x: 520, y: 380, scale: 0.65, flipX: false },
		detected: false,
	},
	{
		landscape: { x: 980, y: 570, scale: 0.75, flipX: false },
		portrait: { x: 590, y: 750, scale: 1.3, flipX: false },
		detected: false,
	},
	{
		landscape: { x: 530, y: 330, scale: 0.55, flipX: true },
		portrait: { x: 690, y: 160, scale: 0.55, flipX: false },
		detected: false,
	},
];
