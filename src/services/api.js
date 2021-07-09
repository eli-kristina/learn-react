import axios from 'axios';

export const LoginService = (payload, headers) => {
	return axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, payload, headers);
};
	
export const GetBreeds = () => {
	return axios.get(`${process.env.REACT_APP_SERVER_URL}/api/breeds`);
};
