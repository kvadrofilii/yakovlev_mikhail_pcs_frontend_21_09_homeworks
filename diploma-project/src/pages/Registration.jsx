import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import Gender from '../components/Gender.jsx';
import { registration } from '../actions/user.js';

function Registration() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [age, setAge] = useState('');
	const [about, setAbout] = useState('');

	return (
		<div>
			<h1 className='registration__title'>Создай новый аккаунт</h1>
			<p className='registration__text'>Присоединяйся к сообществу из 518 млн человек!</p>
			<div className='registration__form'>
				<Input value={firstname} setValue={setFirstname} type='text' placeholder='Ваше имя' icoBefore='user' input='' icoAfter='' />
				<Input value={lastname} setValue={setLastname} type='text' placeholder='Ваша фамилия' icoBefore='user' input='' icoAfter='' />
				<Input value={age} setValue={setAge} type='text' placeholder='Ваш возраст' icoBefore='user' input='' icoAfter='' />
				<Gender />
				<Input value={about} setValue={setAbout} type='textarea' placeholder='Напишите о себе' input='' icoBefore='' icoAfter='' />
				<Input value={email} setValue={setEmail} type='email' placeholder='Введите e-mail' icoBefore='email' input='' icoAfter='' />
				<Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='' />
				<button type='button' className="button button_big button_colored registration__button" onClick={() => registration(email, password, firstname, lastname, about, age)}>Создать аккаунт</button>
				{/*<Button
					onClick={() => registration(email, password)}
					type='button'
					url='/'
					className='button button_big button_colored registration__button'
					text='Создать аккаунт' />*/}
			</div>
		</div >
	);
}

export default Registration;
