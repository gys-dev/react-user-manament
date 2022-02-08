import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/scss/vendor.scss";
import "./styles/scss/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
