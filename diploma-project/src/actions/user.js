import React from 'react';
import axios from 'axios';
import { setUser } from "../reducers/userReducer.js";
import users from '../data/users.json';

export const registration = async (email, password, firstname, lastname, about, age, gender) => {
	try {
		const response = await axios.post(`http://localhost:8080/api/auth/registration`, {
			email, password, firstname, lastname, about, age, gender
		});

		// TODO:
		// del prod
		console.log(response?.data);
	} catch (e) {

		// TODO:
		// del prod
		console.log(e);
	}
}

export const login = (email, password) => {
	return dispatch => {

		const sortCards = users.users.filter((user) => user.email === email);

		//const response = users.users;
		//dispatch(setUser(response.data.user));
		//localStorage.setItem('token', response.data.token);
		console.log(sortCards);

	}
}

//export const login = (email, password) => {
//	return async dispatch => {
//		try {
//			const response = await axios.post(`http://localhost:8080/api/auth/login`, { email, password });
//			dispatch(setUser(response.data.user));
//			localStorage.setItem('token', response.data.token);
//			console.log(response.data);

//		} catch (e) {
//			console.log(e.response.data.message);
//		}
//	}
//}

//export const auth = () => {
//	return async dispatch => {
//		try {
//			const response = await axios.get(`http://localhost:8080/api/auth/auth`,
//				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//			)
//			dispatch(setUser(response.data.user))
//			localStorage.setItem('token', response.data.token)
//		} catch (e) {
//			alert(e.response.data.message)
//			localStorage.removeItem('token')
//		}
//	}
//}