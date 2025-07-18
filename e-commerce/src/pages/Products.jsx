import React, { useEffect, useContext } from "react";
import ProductCard from "../components/Products/ProductCard";
import { ProductsContext } from "../context/ProductsContext/ProductsState";
import "../styles/Product.scss";


const Products = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-page">
      <h1>Todos los productos</h1>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div className="product-list">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;


