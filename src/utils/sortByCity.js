export function sortByCity(arr) {
	return arr.sort((a, b) => {
		const cityA = a.address.city.toLowerCase();
		const cityB = b.address.city.toLowerCase();

		if (cityA > cityB) {
			return 1;
		}
		if (cityA < cityB) {
			return -1;
		}

		return 0;
	});
}
