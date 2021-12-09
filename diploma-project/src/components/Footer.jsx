import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className='container'>
			<div className='footer'>
				<Link to={'privacy'} className={'link footer__item'}>Политика обработки персональных данных</Link>
				<span className='footer__item'>© Znakomstva.com 2021</span>
			</div>
		</div>
	);
}

export default Footer;
