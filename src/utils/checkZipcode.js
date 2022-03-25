const checkZipcode = (zipcode, setIsInvalidInput) => {
	var re = /^\d{6}$/;
	re.test(zipcode) ? setIsInvalidInput(false) : setIsInvalidInput(true);
};

export { checkZipcode };
