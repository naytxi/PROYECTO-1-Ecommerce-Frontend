import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ProductsProvider } from './context/ProductsContext/productsState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
