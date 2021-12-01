import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { I18n } from 'aws-amplify';
import AmplifyI18n from 'amplify-i18n';

const locales = ["en", "fr", "pt-BR"]
AmplifyI18n.configure(locales)
I18n.setLanguage("pt-BR")

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
