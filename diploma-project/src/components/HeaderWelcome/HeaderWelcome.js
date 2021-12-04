import Container from '../Container/Container';
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
		<div className='header-welcome'>
			<Container className='container'>
				<div className='header-welcome-wrapper'>
					<Logo />
					<div className='enter-wrapper'>
						<div className='enter-title'>{strTitle}</div>
						<Button url='/' className='button button_outline' text={strButton} />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default HeaderWelcome;
