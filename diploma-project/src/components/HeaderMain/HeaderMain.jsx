import Container from '../Container/Container.jsx';
import Header from '../Header/Header.jsx';
import Logo from '../Logo/Logo.jsx';
import avatar from '../../assets/img/user-1.jpg';

function HeaderMain() {
	return (
		<Header>
			<Container className='container'>
				<div className='header-main-wrapper'>
					<Logo className='logo-main' />
					<div className='menu-wrapper'>
						<div className='header__search'></div>
						<div className='header__user'>
							<img className='header__avatar' src={avatar} alt='User avatar' />
							<span className='header__name'>Иван Иванов</span>
						</div>
					</div>
				</div>
			</Container>
		</Header>
	);
}

export default HeaderMain;
