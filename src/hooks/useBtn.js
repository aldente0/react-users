import { sortByCity } from '../utils/sortByCity';
import { sortByCompany } from '../utils/sortByCompany';

export function useBtn(parameters) {
	const {
		setUsers,
		users = [],
		value,
		type,
		formDisabled,
		setFormDisabled,
	} = parameters;

	const newUsers = [...users];

	const handleClick = () => {
		switch (type) {
			case 'CITY':
				setUsers(sortByCity(newUsers));
				break;
			case 'COMPANY':
				setUsers(sortByCompany(newUsers));
				break;
			case 'INPUTS':
				setFormDisabled(!formDisabled);
				break;
			default:
				break;
		}
	};

	return {
		value,
		handleClick,
	};
}
