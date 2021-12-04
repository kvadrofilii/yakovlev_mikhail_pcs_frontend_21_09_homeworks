import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

function Header() {
	return (
		<div className='header-main'>
			<Container>
				<Logo />
				<Button url='/' className='button button_outline' text='Вход' />
			</Container>

		</div>
	);
}

export default Header;
