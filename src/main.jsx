import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { BikeProvider } from './context/BikeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BikeProvider>
        <App />
      </BikeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
