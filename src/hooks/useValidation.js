import { useState, useEffect } from 'react';

import {
	checkMinLength,
	checkEmail,
	checkTel,
	checkZipcode,
	checkWebsite,
} from '../utils/utils';

const useValidation = (value, validationParams) => {
	const [isInvalidInput, setIsInvalidInput] = useState(false);

	useEffect(() => {
		for (const param in validationParams) {
			switch (param) {
				case 'minLength':
					checkMinLength(
						value,
						param,
						validationParams,
						setIsInvalidInput
					);
					break;
				case 'isEmail':
					checkEmail(value, setIsInvalidInput);
					break;
				case 'isPhone':
					checkTel(value, setIsInvalidInput);
					break;
				case 'isZipcode':
					checkZipcode(value, setIsInvalidInput);
					break;
				case 'isWebsite':
					checkWebsite(value, setIsInvalidInput);
					break;
				default:
					break;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	return {
		isInvalidInput,
	};
};

export { useValidation };
