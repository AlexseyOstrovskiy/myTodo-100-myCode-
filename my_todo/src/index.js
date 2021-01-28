import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {addNameForPublicAcc, getNameNewAcc} from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <App store={store}
          addNameForPublicAcc={addNameForPublicAcc}
          getNameNewAcc ={getNameNewAcc} />
  </React.StrictMode>,
  document.getElementById('root')
);
