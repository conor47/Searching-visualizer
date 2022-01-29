import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { NavbarProvider } from './Context/NavbarContext';

ReactDOM.render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
