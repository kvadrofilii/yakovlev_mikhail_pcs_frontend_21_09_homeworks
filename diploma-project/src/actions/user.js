import React from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { setUser } from "../reducers/userReducer.js";

export const registration = async (email, password, firstname, lastname, about, age, gender) => {
	try {
		const response = await axios.post(`http://localhost:8080/api/auth/registration`, {
			email, password, firstname, lastname, about, age, gender
		});

		<Navigate to={'persons'} />

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
	return async dispatch => {
		try {
			const response = await axios.post(`http://localhost:8080/api/auth/login`, { email, password });
			dispatch(setUser(response.data.user));
			localStorage.setItem('token', response.data.token);
			console.log(response.data);
			<Navigate to={'persons'} />

		} catch (e) {
			console.log(e.response.data.message);
		}
	}
}

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