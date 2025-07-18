import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsState';
import '../styles/Carrito.scss'; // si aún no existe, lo crearemos luego

const Carrito = () => {
  const { cart, clearCart } = useContext(ProductsContext);

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

          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
