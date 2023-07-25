import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components/other/ScrollToTop';
import { CartProvider } from './context/CartContext';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>
);

