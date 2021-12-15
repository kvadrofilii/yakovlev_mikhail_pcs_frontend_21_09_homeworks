import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../actions/user.js";
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';

function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	// path users
	const fromPage = location.state?.from?.pathname || '/';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	//function saveAuth() {
	//	localStorage.setItem('key', 'value');
	//	console.log(localStorage.getItem('key'));
	//}

	return (
		<div>
			<h1 className='login__title'>Знакомства без преград</h1>
			<p className='login__text'>Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.</p>
			<div className='login__form'>
				<Input value={email} setValue={setEmail} type='email' placeholder='Введите электронную почту' icoBefore='email' input='' icoAfter='' />
				<Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='' />
				<button type='button' className='button button_big button_colored login__button' onClick={() => dispatch(login(email, password))}>
					Войти
				</button>
				{/*<Button type='button' url='/' className='button button_big button_colored login__button' text='Войти' />*/}
			</div>
		</div>
	);
}

export default Login;
