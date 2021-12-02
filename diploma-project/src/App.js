import './App.scss';
import './components/button/button.js'
import Button from './components/button/button.js';

function App() {
  return (
    <div className='App'>
      <Button url='/' class='button button_big button_colored' text='Вход' />
    </div>
  );
}

export default App;
