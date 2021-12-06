import Container from './components/Container/Container.jsx';
import HeaderMain from './components/HeaderMain/HeaderMain.jsx';
import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';

function Main() {
	return (
		<div>
			<HeaderMain />
			<Container>
				<h2 className='main__sort'>Сортировать по: имени</h2>
				<div className='cards'>
					<Card name='Виктория' age='18' url='/' />
					<Card name='Виктория' age='18' url='/' />
					<Card name='Виктория' age='18' url='/' />
					<Card name='Виктория' age='18' url='/' />
					<Card name='Виктория' age='18' url='/' />
					<Card name='Виктория' age='18' url='/' />
					<Card name='Виктория' age='18' url='/' />
					<Card name='Виктория' age='18' url='/' />
				</div>
			</Container>
			<Footer />
		</div>
	);
}

export default Main;
