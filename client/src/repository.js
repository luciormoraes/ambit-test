import axios from 'axios';

const BASE_URL = 'http://localhost:9000';


export function getEveryone() {
	return axios.get(`${BASE_URL}/users/everyone`)
		.then(response => response.data);
}

export function getMale() {
	return axios.get(`${BASE_URL}/users/male`)
		.then(response => response.data);
}

export function getFemale() {
	return axios.get(`${BASE_URL}/users/female`)
		.then(response => response.data);
}

export function getUnder30() {
	return axios.get(`${BASE_URL}/users/under30`)
		.then(response => response.data);
}

export function getOver30() {
	return axios.get(`${BASE_URL}/users/over30`)
		.then(response => response.data);
}