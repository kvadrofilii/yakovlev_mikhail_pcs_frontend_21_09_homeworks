import React from 'react';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import { useLocation, Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { userName } from "../reducers/userNameReducer";
//import { useSelector } from 'react-redux';

function logOut() {
	localStorage.removeItem('auth');
	localStorage.removeItem('mail');
	localStorage.removeItem('password');
	localStorage.removeItem('firstName');
	localStorage.removeItem('lastName');
	localStorage.removeItem('about');
	<Navigate to='login' />
}

function Header() {
	//const state = useSelector(state => state.userName.name);
	const location = useLocation();
	//const isAuth = useSelector(state => state.user.isAuth);
	const isAuth = localStorage.getItem('auth');
	//const dispatch = useDispatch();
	const name = localStorage.getItem('firstName');

	if (isAuth) {
		return (
			<div className='header'>
				<div className='container'>
					<div className='header__main-wrapper'>
						<Logo auth={true} />
						<div className='header__main-wrapper'>
							<div className='header__user'>
								<span className='header__name'>{name}</span>
								<Link
									onClick={logOut}
									to={'login'}
									className={'button button_outline'}>
									Выход
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<Logo auth={false} />
					{location.pathname.includes('registration')
						?
						<div className='header__enter-wrapper'>
							<div className='header__title'>Уже есть аккаунт?</div>
							<Button type='link' url='login' className='button button_outline' text='Войти' />
						</div>
						:
						<div className='header__enter-wrapper'>
							<div className='header__title'>Впервые здесь?</div>
							<Button type='link' url='registration' className='button button_outline' text='Регистрация' />
						</div>
					}

				</div>
			</div>
		</div>
	);

}

export default Header;


