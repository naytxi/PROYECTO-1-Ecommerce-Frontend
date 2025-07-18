import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsState';
import '../styles/Carrito.scss'; 

const Carrito = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  // Sumar todos los precios del carrito
  const total = cart.reduce((acc, product) => acc + Number(product.price), 0);

  return (
    <div className="carrito">
      <h2>🛒 Tu carrito de compras</h2>

      {cart.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((prod, i) => (
              <li key={i}>
                {prod.name} - {prod.price}€
              </li>
            ))}
          </ul>

    <div className="total">
        <p>Total a pagar: <strong>${total.toFixed(2)}</strong></p>
    </div>

    <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
