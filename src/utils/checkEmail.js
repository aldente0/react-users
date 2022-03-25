const checkEmail = (email, setIsInvalidInput) => {
	var re = /\S+@\S+\.\S+/;
	re.test(email) ? setIsInvalidInput(false) : setIsInvalidInput(true);
};

export { checkEmail };
