import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';
import App from './App.jsx';
//import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/*<Provider>*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
