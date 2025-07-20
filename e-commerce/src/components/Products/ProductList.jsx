
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../../styles/Product.scss";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const ProductList = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  if (!products || products.length === 0) return <p>No hay productos disponibles</p>;

  return (
    <div className="product-list">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductList;
