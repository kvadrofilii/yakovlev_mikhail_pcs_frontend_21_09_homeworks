import './App.scss';
import Container from './components/Container/Container.js';
import Button from './components/Button/Button.js';


function App() {
  return (
    <div className='App'>
      <Container>
        <Button url='/' className='button button_big button_colored' text='Вход' />
      </Container>
    </div>
  );
}

export default App;
