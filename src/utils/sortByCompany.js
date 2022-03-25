export function sortByCompany(arr) {
	return arr.sort((a, b) => {
		const companyA = a.company.name.toLowerCase();
		const companyB = b.company.name.toLowerCase();

		if (companyA > companyB) {
			return 1;
		}
		if (companyA < companyB) {
			return -1;
		}

		return 0;
	});
}
