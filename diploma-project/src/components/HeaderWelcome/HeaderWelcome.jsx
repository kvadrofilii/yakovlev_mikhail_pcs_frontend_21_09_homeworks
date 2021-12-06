import Container from '../Container/Container';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

function HeaderWelcome({ enter = 'enter' }) {

	let strTitle = 'Впервые здесь?',
		strButton = 'Регистрация';

	if (enter === 'enter') {
		strTitle = 'Впервые здесь?';
		strButton = 'Регистрация'
	} if (enter === 'registration') {
		strTitle = 'Уже есть аккаунт?';
		strButton = 'Войти'
	}

	return (
		<Header>
			<Container className='container'>
				<div className='header-welcome-wrapper'>
					<Logo />
					<div className='enter-wrapper'>
						<div className='enter-title'>{strTitle}</div>
						<Button type='link' url='/' className='button button_outline' text={strButton} />
					</div>
				</div>
			</Container>
		</Header>
	);
}

export default HeaderWelcome;
