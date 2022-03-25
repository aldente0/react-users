function checkOnEmpty(value, setErrorClass) {
	value ? setErrorClass('') : setErrorClass('invalid');
}

export { checkOnEmpty };
