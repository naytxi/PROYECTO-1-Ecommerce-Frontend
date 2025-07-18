import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsState';
import '../styles/Carrito.scss';

const Carrito = () => {
  const { cart, clearCart, removeCartItem, updateCartQuantity } = useContext(ProductsContext);

  // Calcula el total considerando la cantidad de cada producto
  const total = cart.reduce((acc, item) => acc + (Number(item.product.price) * item.quantity), 0);

  const handleRemoveItem = (productId) => {
    removeCartItem(productId);
  };

  const handleUpdateQuantity = (productId, change) => {
    const currentItem = cart.find(item => item.product.id === productId);
    if (currentItem) {
      updateCartQuantity(productId, currentItem.quantity + change);
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
              {cart.map((item) => ( // Cambiado 'prod' por 'item' para mayor claridad
                <li key={item.product.id} className="carrito-item">
                  <div className="item-info">
                    <span className="item-name">{item.product.name}</span>
                    <span className="item-price">{item.product.price}€</span>
                    <div className="item-quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleUpdateQuantity(item.product.id, -1)}
                        disabled={item.quantity <= 1} // Deshabilita si la cantidad es 1 para no bajar de 0
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
              <p className="carrito-total">Total a pagar: <strong>{total.toFixed(2)}€</strong></p>
              <button className="carrito-clear-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;