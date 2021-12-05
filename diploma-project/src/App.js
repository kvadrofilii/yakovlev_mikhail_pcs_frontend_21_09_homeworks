import './App.scss';
import Container from './components/Container/Container.jsx';
//import Button from './components/Button/Button.jsx';
import H1 from './components/H1/H1.jsx';
//import HeaderWelcome from './components/HeaderWelcome/HeaderWelcome.jsx';
import HeaderMain from './components/HeaderMain/HeaderMain.jsx';
//import Input from './components/Inputs/Inputs.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <div className='App'>
      {/*<HeaderWelcome />*/}
      <HeaderMain />
      <Container>
        <H1 className='welcome-title' text='Знакомства без преград' />

        {/*<Button url='/' className='button button_small button_colored' text='Вход' />

        <Input className='input-wrapper' type='email' placeholder='Введите электронную почту' />*/}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
