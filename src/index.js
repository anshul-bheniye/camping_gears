import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components/other/ScrollToTop';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

