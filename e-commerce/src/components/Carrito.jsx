import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsState';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import '../styles/Carrito.scss';

const Carrito = () => {
  const { cart, clearCart, removeCartItem, updateCartQuantity } = useContext(ProductsContext);
  const { user, token } = useContext(UserContext);

  const total = cart.reduce((acc, item) => {
    if (!item?.product || typeof item.product.price !== 'number') return acc;
    return acc + (item.product.price * item.quantity);
  }, 0);

  const handleRemoveItem = (productId) => {
    removeCartItem(productId);
  };

  const handleUpdateQuantity = (productId, change) => {
    const currentItem = cart.find(item => item.product.id === productId);
    if (currentItem) {
      updateCartQuantity(productId, currentItem.quantity + change);
    }
  };

  const handlePagar = async () => {
    if (!token || cart.length === 0) return;

    try {

      const productos = cart
        .filter(item => item?.product?.id && item.quantity > 0)
        .map(item => ({
          id: item.product.id,
          cantidad: item.quantity
        }));

      const response = await axios.post('http://localhost:3000/pedidos', { productos }, {
        headers: { Authorization: `Bearer ${token}` }
      });

    
      clearCart();
      alert('¡Pedido realizado con éxito!');
    } catch (error) {
      
      console.error('🟥 Error al realizar el pedido:', error.response?.data || error.message);
      alert('Ocurrió un error al realizar el pedido.');
    }
  };

  return (
    <div className="carrito-page">
      <div className="carrito-container">
        <h2>🛒 Tu carrito de compras</h2>

        {cart.length === 0 ? (
          <p className="carrito-empty-message">No tienes productos en el carrito.</p>
        ) : (
          <>
            <ul className="carrito-list">
              {cart.map((item) => (
                <li key={item.product?.id ?? Math.random()} className="carrito-item">
                  <div className="item-info">
                    <span className="item-name">{item.product?.name ?? 'Producto desconocido'}</span>
                    <span className="item-price">{item.product?.price ?? 0}€</span>
                    <div className="item-quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleUpdateQuantity(item.product.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleUpdateQuantity(item.product.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="item-remove-btn"
                    onClick={() => handleRemoveItem(item.product.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>

            <div className="carrito-summary">
              <p className="carrito-total">
                Total a pagar: <strong>{total.toFixed(2)}€</strong>
              </p>
              <div className="carrito-buttons">
                <button className="carrito-clear-btn" onClick={clearCart}>
                  Vaciar carrito
                </button>
                <button className="carrito-pagar-btn" disabled={!user} onClick={handlePagar}>
                  Pagar
                </button>
              </div>
              {!user && <p className="login-warning">Debes iniciar sesión para pagar.</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
