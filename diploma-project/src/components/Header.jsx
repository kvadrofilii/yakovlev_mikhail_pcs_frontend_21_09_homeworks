import Logo from './Logo.jsx';
import avatar from '../assets/img/user-1.jpg';
import Button from './Button.jsx';

function Header({ page = 'login' }) {

	if (page === 'login') {
		return (
			<div className='header'>
				<div className='container'>
					<div className='header__wrapper'>
						<Logo auth={false} />
						<div className='header__enter-wrapper'>
							<div className='header__title'>Впервые здесь?</div>
							<Button type='link' url='registration' className='button button_outline' text='Регистрация' />
						</div>
					</div>
				</div>
			</div>
		);
	} else if (page === 'registration') {
		return (
			<div className='header'>
				<div className='container'>
					<div className='header__wrapper'>
						<Logo auth={false} />
						<div className='header__enter-wrapper'>
							<div className='header__title'>Уже есть аккаунт?</div>
							<Button type='link' url='login' className='button button_outline' text='Войти' />
						</div>
					</div>
				</div>
			</div>
		);
	} else if (page === 'main') {
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
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
