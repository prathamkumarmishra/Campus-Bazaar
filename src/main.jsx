import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import { MarketplaceProvider } from './context/MarketplaceContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarketplaceProvider>
        <App />
        <Toaster position="top-right" toastOptions={{ duration: 2800, style: { borderRadius: '12px', padding: '12px 14px', color: '#16203a', fontSize: '14px', fontWeight: 600 } }} />
      </MarketplaceProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
