import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/App.scss';
import { ProductsProvider } from './context/ProductsContext/ProductsState'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider> {/* ENVUELVE LA APP */}
        <App />
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>
);

