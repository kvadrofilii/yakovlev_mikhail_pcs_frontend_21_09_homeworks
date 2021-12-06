import './App.scss';
import Container from './components/Container/Container.jsx';
//import Button from './components/Button/Button.jsx';
import H1 from './components/H1/H1.jsx';
//import HeaderWelcome from './components/HeaderWelcome/HeaderWelcome.jsx';
import HeaderMain from './components/HeaderMain/HeaderMain.jsx';
import Input from './components/Input/Input.jsx';
//import Gender from './components/Gender/Gender.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <div className='App'>
      {/*<HeaderWelcome />*/}
      <HeaderMain />
      <Container>
        <H1 className='welcome-title' text='Знакомства без преград' />

        {/*<div className='gender-wrapper'>
          <Gender gender='man' isCondition='true' />
          <Gender gender='woman' isCondition='false' />
        </div>*/}
        {/*<Button url='/' className='button button_big button_colored' text='Вход' />*/}
        <Input type='text' placeholder='Ваше имя' icoBefore='user' input='' icoAfter='' />
        <Input type='text' placeholder='Ваша фамилия' icoBefore='user' input='' icoAfter='' />
        <Input type='text' placeholder='Ваш возраст' icoBefore='user' input='' icoAfter='' />
        <Input type='email' placeholder='Введите электронную почту' icoBefore='email' input='input_error' icoAfter='input_error' />
        <Input type='password' placeholder='Введите пароль' icoBefore='password' input='' icoAfter='input_eye' />
      </Container >
      <Footer />
    </div >
  );
}

export default App;
