// src/components/Cart/Carrito.jsx
import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsState';
import '../styles/Carrito.scss';

const Carrito = () => {
  const { cart, clearCart } = useContext(ProductsContext);

  const total = cart.reduce((acc, product) => acc + Number(product.price), 0);

  // Función placeholder para eliminar un producto individual (la implementaremos después)
  const handleRemoveItem = (productId) => {
    console.log("Eliminar producto con ID:", productId);
    // Aquí llamaremos a la función del contexto para eliminar el producto
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
                <li key={i} className="carrito-item">
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