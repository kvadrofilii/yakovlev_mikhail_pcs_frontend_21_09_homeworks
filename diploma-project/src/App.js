import './App.scss';
import Container from './components/Container/Container.jsx';
//import Button from './components/Button/Button.jsx';
import H1 from './components/H1/H1.jsx';
//import HeaderWelcome from './components/HeaderWelcome/HeaderWelcome.jsx';
import HeaderMain from './components/HeaderMain/HeaderMain.jsx';
//import Input from './components/Input/Input.jsx';
//import Gender from './components/Gender/Gender.jsx';
import Footer from './components/Footer/Footer.jsx';
import BirthDate from './components/BirthDate/BirthDate.jsx';


function App() {
  return (
    <div className='App'>
      {/*<HeaderWelcome />*/}
      <HeaderMain />
      <Container>
        <H1 className='welcome-title' text='Знакомства без преград' />
        <BirthDate />


        {/*<div className='gender-wrapper'>
          <Gender gender='man' isCondition='true' />
          <Gender gender='woman' isCondition='false' />
        </div>*/}
        {/*<Button url='/' className='button button_big button_colored' text='Вход' />*/}
        {/*<Input className='input-wrapper' type='email' placeholder='Введите электронную почту' />*/}
      </Container >
      <Footer />
    </div >
  );
}

export default App;
