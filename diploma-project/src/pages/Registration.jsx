import React, { useState } from 'react';
import Input from '../components/Input.jsx';
import Gender from '../components/Gender.jsx';
import { Navigate } from 'react-router-dom';
//import { registration } from '../actions/user.js';

function Registration(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [about, setAbout] = useState('');
	const [gender, setGender] = useState('');

	function onRegistration() {
		localStorage.setItem('auth', true);
		localStorage.setItem('mail', email);
		localStorage.setItem('password', password);
		localStorage.setItem('firstName', firstName);
		localStorage.setItem('lastName', lastName);
		localStorage.setItem('about', about);
		localStorage.setItem('age', age);
		<Navigate to='login' />
	}

	return (
		<div>
			<h1 className='registration__title'>Создай новый аккаунт</h1>
			<p className='registration__text'>Присоединяйся к сообществу из 518 млн человек!</p>
			<div className='registration__form'>
				<Input value={firstName} setValue={setFirstName} type='text' placeholder='Ваше имя' icoBefore='user' input='' icoAfter='' />
				<Input value={lastName} setValue={setLastName} type='text' placeholder='Ваша фамилия' icoBefore='user' input='' icoAfter='' />
				<Input value={age} setValue={setAge} type='text' placeholder='Ваш возраст' icoBefore='user' input='' icoAfter='' />
				<Gender value={gender} setValue={setGender} />
				<Input value={about} setValue={setAbout} type='textarea' placeholder='Напишите о себе' input='' icoBefore='' icoAfter='' />
				<Input value={email} setValue={setEmail} type='email' placeholder='Введите e-mail' icoBefore='email' input='' icoAfter='' />
				<Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='' />
				<button type='button' className="button button_big button_colored registration__button" onClick={onRegistration}>Создать аккаунт</button>
			</div>
		</div >
	);
}

export default Registration;
