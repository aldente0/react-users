const checkTel = (tel, setIsInvalidInput) => {
	var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
	re.test(tel) ? setIsInvalidInput(false) : setIsInvalidInput(true);
};

export { checkTel };
