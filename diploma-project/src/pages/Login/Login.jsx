import HeaderWelcome from './components/HeaderWelcome/HeaderWelcome.jsx';
import Container from './components/Container/Container.jsx';
import Input from './components/Input/Input.jsx';
import Button from './components/Button/Button.jsx';
import Footer from './components/Footer/Footer.jsx';

function Login() {
	return (
		<div>
			<HeaderWelcome enter='enter' />
			<Container>
				<h1 className='login__title'>Знакомства без преград</h1>
				<p className='login__text'>Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.</p>
				<form className='login__form' action="" method="post">
					<Input type='email' placeholder='Введите электронную почту' icoBefore='email' input='input_error' icoAfter='input_error' />
					<Input type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='input_eye' />
					<Button type='button' url='/' className='button button_big button_colored login__button' text='Вход' />
				</form>
			</Container >
			<Footer />
		</div>
	);
}

export default Login;
