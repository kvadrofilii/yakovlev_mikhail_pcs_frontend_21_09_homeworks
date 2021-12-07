import Container from '../../components/Container/Container.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Button from '../../components/Button/Button.jsx';

function Page404() {
	return (
		<div>
			<Header page='main' />
			<Container>
				<div className='page404__wrapper'>
					<div className='page404__content'>
						<h1 className='page404__title'>404</h1>
						<p className='page404__text'>Вы заблудились. Но не беспокойтесь: вот правильный путь</p>
						<div className='page404__button-wrapper'>
							<Button type='link' url='/' className='button button_outline page404__button' text='Вернуться назад' />
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}

export default Page404;
