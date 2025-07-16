import React from "react"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span>{product.price} €</span>
      <button>Añadir al carrito</button>
    </div>
  )
}

export default ProductCard
