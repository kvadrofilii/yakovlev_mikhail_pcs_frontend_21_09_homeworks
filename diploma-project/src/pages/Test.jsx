import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import Footer from '../components/Footer.jsx';
import { useHttp } from '../hooks/http.hook.js';

function Test() {
	const { loading, request, error } = useHttp();
	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', { ...form });
			console.log('Data', data);
		} catch (e) { }
	}

	return (
		<div>
			<h1 className='login__title'>Знакомства без преград</h1>
			<p className='login__text'>Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.</p>
			<form className='login__form' action="" method="post">
				<Input type='email' placeholder='Введите электронную почту' icoBefore='email' input='input_error' icoAfter='input_error' />
				<Input type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='input_eye' />
				<Button type='button' url='/' className='button button_big button_colored login__button' text='Вход' />
			</form>
		</div >
	);
}
export default Test;