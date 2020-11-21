import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';

/* eslint-disable react/jsx-filename-extension, no-undef */
ReactDOM.render(
  <App title="HEllO" />,
  document.getElementById('app'),
);
/* eslint-enable react/jsx-filename-extension, no-undef */

module.hot.accept();
