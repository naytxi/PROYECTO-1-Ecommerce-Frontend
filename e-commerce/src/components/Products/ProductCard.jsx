import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const fallbackImages = {
  "Camiseta Zelda": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/b194daa940c1699353c420065152fa00_rralnl.jpg",
  "Ordenador Asus": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/5fd786d469cf01fe60ee982141bf91c0_zjljn9.jpg",
  "Delantal de flores": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/8ce309b37adea9902253ed29d24bdc13_upanf6.jpg",
  "Cuadro vintage": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/6072c47710e6429256290d7758830678_qs5fra.jpg",
  "Gafas Gucci": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/9c8a66d533a21b89d9e738e856445bbf_z3gv5w.jpg",
  "Mesa redonda vintage": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/a0ea8f302e635ee81038e2dc3e6c8f84_ssqair.jpg",
  "Juego Mario Kart Nintendo DS": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/327caec7ffccc96cc2a185e170d02b84_viksji.jpg",
  "Camiseta Iron Maiden": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/aac240851ddeb4ff8e7e06fbb824895f_mfe1wp.jpg",
  "Espatula Cocina": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/792c228464096f082fe71bfc934f4ef6_qux7yw.jpg",
  "Raton Inalambrico": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/806a977bc9ac2f9ea57390a3965b41bf_n8bbuw.jpg",
  "Libro El Señor de Los Anillos": "https://res.cloudinary.com/dhzdzc2pb/image/upload/v1752924496/8bb8b42c3d3f820ee5638491c5013f3d_oag5sb.jpg"
};

const ProductCard = ({ product }) => {
  const { addCart } = useContext(ProductsContext);
  const [added, setAdded] = useState(false);

  const imageUrl = product.image || fallbackImages[product.name] || "https://via.placeholder.com/150";

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <Link to={`/productos/${product.id}`} className="product-card-link">
        <img src={imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.price} €</span>
      </Link>
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
