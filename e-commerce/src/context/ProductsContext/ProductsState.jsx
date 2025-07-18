import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import ProductsReducer from './ProductsReducer';

// Inicializa el carrito desde localStorage. Si no hay, usa un array vacío.
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  products: [],
  cart: cartFromLocalStorage, // Usa el carrito de localStorage
};

const API_URL = 'http://localhost:3000';

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/productos`);
      const productos = Array.isArray(res.data) ? res.data : res.data.products;
      dispatch({
        type: 'GET_PRODUCTS',
        payload: productos,
      });
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const addCart = (product) => {
    // Comprueba si el producto ya está en el carrito
    const existingItem = state.cart.find(item => item.product.id === product.id);

    if (existingItem) {
      // Si existe, actualiza la cantidad
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { productId: product.id, quantity: existingItem.quantity + 1 },
      });
    } else {
      // Si no existe, añade el producto con cantidad 1
      dispatch({
        type: 'ADD_CART',
        payload: { product, quantity: 1 }, // Añade el producto con cantidad
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeCartItem = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId,
    });
  };

  // Nueva función para actualizar la cantidad de un producto en el carrito
  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeCartItem(productId); // Si la cantidad es 0 o menos, elimínalo
    } else {
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { productId, quantity: newQuantity },
      });
    }
  };

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
        removeCartItem,
        updateCartQuantity, // Añade la nueva función al contexto
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};