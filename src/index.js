import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/searching.css';
import './Styles/sorting.css';

import { NavbarProvider } from './Context/NavbarContext';
import { SearchProvider } from './Context/SearchingContext';
import { SortingProvider } from './Context/SortingContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <SortingProvider>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </SortingProvider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
