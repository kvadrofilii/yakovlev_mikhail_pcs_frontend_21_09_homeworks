import React from 'react';
import Logo from './Logo.jsx';
import avatar from '../assets/img/user-1.jpg';
import Button from './Button.jsx';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";

function Header({ token }) {
	const location = useLocation();
	const isAuth = useSelector(state => state.user.isAuth);
	const dispatch = useDispatch();

	if (isAuth) {
		return (
			<div className='header'>
				<div className='container'>
					<div className='header__main-wrapper'>
						<Logo auth={true} />
						<div className='header__main-wrapper'>
							<div className='header__search'></div>
							<div className='header__user'>
								<img className='header__avatar' src={avatar} alt='User avatar' />
								<span>Иван Иванов</span>
								<button type='button' url='' className="button button_outline" onClick={() => dispatch(logout())}>Выход</button>
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
