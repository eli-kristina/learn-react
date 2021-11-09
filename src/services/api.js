import axios from 'axios';

export const LoginService = (payload, headers) => {
	return axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, payload, headers);
};

export const ShopService = () => {
	return axios.get(`${process.env.REACT_APP_SERVER_URL}/products`);
};