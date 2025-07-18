import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const ProductCard = ({ product }) => {
  const { addCart } = useContext(ProductsContext);

  // Función para detener la propagación del evento del clic del botón
  const handleAddToCartClick = (e) => {
    e.preventDefault(); // Esto previene que el evento se propague al Link padre
    e.stopPropagation(); // Esto detiene la propagación del evento a elementos superiores
    addCart(product);
  };

  return (
    <div className="product-card"> {/* Ahora el contenedor principal es un div */}
      <Link to={`/productos/${product.id}`} className="product-card-link"> {/* Este Link es solo para la navegación */}
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.price} €</span>
      </Link>
      {/* El botón está fuera del Link, pero aún dentro del contenedor principal */}
      <button className="add-cart-btn" onClick={handleAddToCartClick}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
