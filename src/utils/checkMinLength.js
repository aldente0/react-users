function checkMinLength(
	value = '',
	param,
	validationParams,
	setIsInvalidInput
) {
	console.log(value);
	value.length < validationParams[param]
		? setIsInvalidInput(true)
		: setIsInvalidInput(false);
}

export { checkMinLength };
