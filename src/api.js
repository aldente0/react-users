import { API_URL } from './config';

const getUsers = async () => {
	const response = await fetch(API_URL);

	return response.json();
};

const getUser = async (userId) => {
	const response = await fetch(API_URL + `/${userId}`);

	return response.json();
};

export { getUsers, getUser };
