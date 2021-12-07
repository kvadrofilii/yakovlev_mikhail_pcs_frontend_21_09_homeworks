import Container from './Container.jsx';

function Footer() {
	return (
		<Container className='container'>
			<div className='footer'>
				<a className='footer__item' href='/privacy/'>Политика обработки персональных данных</a>
				<span className='footer__item'>© Znakomstva.com 2021</span>
			</div>
		</Container>
	);
}

export default Footer;
