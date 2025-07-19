import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const ProductCard = ({ product }) => {
  const { addCart } = useContext(ProductsContext);
  const [added, setAdded] = useState(false); // ✅ estado para feedback visual

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addCart(product);
    setAdded(true); // ✅ activa feedback

    setTimeout(() => setAdded(false), 2000); // ✅ resetea después de 2s
  };

  return (
    <div className="product-card">
      <Link to={`/productos/${product.id}`} className="product-card-link">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.price} €</span>
      </Link>

      {/* ✅ botón con clase y texto dinámico */}
      <button
        className={`add-cart-btn ${added ? 'added' : ''}`}
        onClick={handleAddToCartClick}
      >
        {added ? '✔ Añadido' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ProductCard;
