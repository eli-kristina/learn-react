import axios from 'axios';

export const getBreeds = () =>
	axios.get(`${process.env.REACT_APP_SERVER_URL}/api/breeds`);