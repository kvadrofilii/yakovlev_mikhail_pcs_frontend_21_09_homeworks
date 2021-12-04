import './App.scss';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import H1 from './components/H1/H1';
import HeaderWelcome from './components/HeaderWelcome/HeaderWelcome';
//import HeaderMain from './components/HeaderMain/HeaderMain';
import Input from './components/Inputs/Inputs';



function App() {
  return (
    <div className='App'>
      <HeaderWelcome />
      <Container>
        <H1 className='welcome-title' text='Знакомства без преград' />

        <Button url='/' className='button button_small button_colored' text='Вход' />

        <Input className='input-wrapper' type='password' placeholder='Введите электронную почту' />
      </Container>
    </div>
  );
}

export default App;
