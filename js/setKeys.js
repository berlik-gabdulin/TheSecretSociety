export const setKeys = (object, item) => {
	const orientation = ["landscape", "portrait"];
	orientation.map((orientation) => {
		object[orientation] = {};
		for (let key in item[orientation]) {
			object[orientation][key] = item[orientation][key];
		}
	});
};
