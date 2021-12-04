import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import avatar from '../../assets/img/user-1.jpg';
import Hamburger from '../Hamburger/Hamburger';

function HeaderMain() {
	return (
		<div className='header-main'>
			<Container className='container'>
				<div className='header-main-wrapper'>
					<Logo className='logo-main' />
					<div className='menu-wrapper'>
						<div className='header__search'></div>
						<div className='header__user'>
							<img className='header__avatar' src={avatar} alt='User avatar' />
							<span className='header__name'>Иван Иванов</span>
						</div>
						<Hamburger />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default HeaderMain;
