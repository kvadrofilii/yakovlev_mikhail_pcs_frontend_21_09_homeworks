import Container from '../../components/Container/Container.jsx';
import Button from '../../components/Button/Button.jsx';
import Header from '../../components/Header/Header.jsx';
import Input from '../../components/Input/Input.jsx';
import Gender from '../../components/Gender/Gender.jsx';
import Footer from '../../components/Footer/Footer.jsx';


function Registration() {
	return (
		<div>
			<Header enter='registration' />
			<Container>
				<h1 className='registration__title'>Создай новый аккаунт</h1>
				<p className='registration__text'>Присоединяйся к сообществу из 518 млн человек!</p>
				<form className='registration__form' action="" method="post">
					<Input type='text' placeholder='Ваше имя' icoBefore='user' input='input_error' icoAfter='input_error' />
					<Input type='text' placeholder='Ваша фамилия' icoBefore='user' input='' icoAfter='' />
					<Input type='text' placeholder='Ваш возраст' icoBefore='user' input='' icoAfter='' />
					<div className='gender-wrapper'>
						<Gender gender='man' isCondition='true' />
						<Gender gender='woman' isCondition='false' />
					</div>
					<Input type='email' placeholder='Введите e-mail' icoBefore='email' input='' icoAfter='' />
					<Input type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='input_eye' />
					<Button type='button' url='/' className='button button_big button_colored registration__button' text='Создать аккаунт' />
				</form>
			</Container >
			<Footer />
		</div>
	);
}

export default Registration;
