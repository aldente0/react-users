import { useState } from 'react';
import { useValidation } from './useValidation';

const useInput = (initialValue, inputType, validationsParams) => {
	const [value, setValue] = useState(initialValue);
	const [type, setType] = useState(inputType);
	const valid = useValidation(value, validationsParams);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return {
		setValue,
		handleChange,
		value,
		type,
		...valid,
	};
};

export { useInput };
