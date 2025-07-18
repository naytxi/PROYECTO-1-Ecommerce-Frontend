import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import ProductsReducer from './ProductsReducer';

const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
// Se mantiene la limpieza del carrito al iniciar para asegurar la consistencia de los datos
const cleanedCart = savedCart.filter(
  item => item && item.product && typeof item.quantity === 'number'
);

const initialState = {
  products: [],
  cart: cleanedCart,
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
    // Aseguramos que el producto sea válido al inicio de la función
    if (!product || !product.id) {
        console.warn('Intento de añadir un producto inválido al carrito:', product);
        return;
    }

    // Comprueba si el producto ya está en el carrito
    const existingItem = state.cart.find(item => item.product.id === product.id);

    if (existingItem) {
      // Si existe, actualiza la cantidad del item existente
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { productId: product.id, quantity: existingItem.quantity + 1 },
      });
    } else {
      // Si no existe, añade el producto con cantidad 1
      dispatch({
        type: 'ADD_CART',
        payload: { product, quantity: 1 }, // Aseguramos que se añade con cantidad 1
      });
    }
  };


  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Función para actualizar la cantidad de un producto específico en el carrito
  const updateCartQuantity = (productId, newQuantity) => {
    dispatch({
      type: 'UPDATE_CART_QUANTITY', 
      payload: { productId, quantity: newQuantity }, 
    });
  };

  // Función para eliminar un item del carrito
  const removeCartItem = (productId) => {
    dispatch({
      type: 'REMOVE_CART_ITEM', 
      payload: productId,
    });
  };

  // Guarda el carrito en localStorage cada vez que cambia
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
        updateCartQuantity,
        removeCartItem,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};