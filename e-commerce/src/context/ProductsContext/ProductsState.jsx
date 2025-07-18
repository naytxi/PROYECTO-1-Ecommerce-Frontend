import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import ProductsReducer from './ProductsReducer';


const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
const cleanedCart = savedCart.filter(
  item => item?.product && typeof item.quantity === 'number'
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
    if (!product || !product.id) return; 
    dispatch({
      type: 'ADD_CART',
      payload: product,
    });
  };


  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

 
  const updateCartQuantity = (productId, newQuantity) => {
    dispatch({
      type: 'UPDATE_CART_QUANTITY', 
      payload: { productId, quantity: newQuantity }, 
    });
  };

  
  const removeCartItem = (productId) => {
    dispatch({
      type: 'REMOVE_CART_ITEM', 
      payload: productId,
    });
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
        updateCartQuantity,
        removeCartItem,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
