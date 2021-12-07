import Container from '../../components/Container/Container.jsx';
import Header from '../../components/Header/Header.jsx';
import Card from '../../components/Card/Card.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Main() {
	return (
		<div>
			<Header page='main' />
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
