import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app';
import reportWebVitals from 'src/reportWebVitals';
import 'src/fonts.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.info);
