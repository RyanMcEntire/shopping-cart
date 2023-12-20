import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';
import { AlbumDataProvider } from './components/AlbumDataContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AlbumDataProvider>
      <Router />
    </AlbumDataProvider>
  </React.StrictMode>
);
