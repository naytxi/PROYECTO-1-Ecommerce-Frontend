import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsState';
import '../styles/Carrito.scss';

const Carrito = () => {
  const { cart, clearCart, removeCartItem } = useContext(ProductsContext); // Obtén removeCartItem

  const total = cart.reduce((acc, product) => acc + Number(product.price), 0);

  const handleRemoveItem = (productId) => {
    removeCartItem(productId); // Llama a la función del contexto
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
              {cart.map((prod, i) => (
                <li key={prod.id || i} className="carrito-item"> {/* Usar prod.id como key si existe, si no, i */}
                  <div className="item-info">
                    <span className="item-name">{prod.name}</span>
                    <span className="item-price">{prod.price}€</span>
                  </div>
                  <button
                    className="item-remove-btn"
                    onClick={() => handleRemoveItem(prod.id)}
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