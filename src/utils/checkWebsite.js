const checkWebsite = (website, setIsInvalidInput) => {
	var re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
	re.test(website) ? setIsInvalidInput(false) : setIsInvalidInput(true);
};

export { checkWebsite };
