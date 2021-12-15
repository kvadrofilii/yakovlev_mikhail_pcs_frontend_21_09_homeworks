import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
//import { login } from "../actions/user.js";
import Input from '../components/Input.jsx';
//import { login } from "../actions/user.js";
import users from '../data/users.json';

function Login() {
	//const navigate = useNavigate();
	//const location = useLocation();
	// path users
	//const fromPage = location.state?.from?.pathname || '/';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//const state = useSelector(state => state.input.className);
	//const dispatch = useDispatch();

	function saveAuth() {
		localStorage.setItem('auth', true);
		console.log(localStorage.getItem('auth'));

		//const isPassword = users.users.filter(item => item.email === email)
		//console.log(isPassword.filter(item => item.password === password));

		//if (isPassword) {
		//	console.log(typeof email);
		//}
		<Navigate to='persons' />
	}

	return (
		<div>
			<div></div>
			<h1 className='login__title'>Знакомства без преград</h1>
			<p className='login__text'>Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.</p>
			<div className='login__form'>
				<Input value={email} setValue={setEmail} type='email' placeholder='Введите электронную почту' icoBefore='email' input='' icoAfter='' />
				<Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='' />
				<button type='button' className='button button_big button_colored login__button' onClick={saveAuth}>
					Войти
				</button>
			</div>
		</div>
	);
}

export default Login;
