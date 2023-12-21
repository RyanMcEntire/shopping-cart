import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';
import { AlbumDataProvider } from './context/AlbumDataContext';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AlbumDataProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </AlbumDataProvider>
  </React.StrictMode>
);
