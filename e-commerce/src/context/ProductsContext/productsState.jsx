// src/context/ProductsContext/ProductsState.jsx

import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import ProductsReducer from './ProductsReducer';

const cart = JSON.parse(localStorage.getItem('cart'));

const initialState = {
  products: [],
  cart: cart ? cart : [],
};

const API_URL = 'http://localhost:3000';

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  // Obtener productos del backend
  const getProducts = async () => {
  const res = await axios.get(API_URL + '/productos')
    dispatch({
      type: 'GET_PRODUCTS',
      payload: res.data,
    })
    return res
  }

  const addCart = (product) => {
    dispatch({
      type: 'ADD_CART',
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Guarda carrito en localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
