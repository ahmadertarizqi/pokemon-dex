import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';
import { Provider } from './store/context';

ReactDOM.render(
   <Provider><App /></Provider>, 
   document.querySelector('#root')
);