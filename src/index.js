import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { NavbarProvider } from './Context/NavbarContext';
import { SearchProvider } from './Context/SearchingContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
