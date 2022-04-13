import React from 'react';
import {createRoot} from 'react-dom/client';
import GlobalStyle from './global';
import App from './App';

createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
);
