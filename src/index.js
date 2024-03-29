import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import App from 'App';
import './index.css';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="future-academy">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
