import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App.jsx';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/*<Provider>*/}
    <App />
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
