import './App.scss';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import H1 from './components/H1/H1';


function App() {
  return (
    <div className='App'>
      <Container>
        <H1 className='welcome-title' text='Знакомства без преград' />
        <Button url='/' className='button button_big button_colored' text='Вход' />
        <Button url='/' className='button button_small button_colored' text='Вход' />
        <Button url='/' className='button button_outline' text='Вход' />

      </Container>
    </div>
  );
}

export default App;
