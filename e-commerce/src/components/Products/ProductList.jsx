import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../../styles/Product.scss";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const ProductList = () => {
  const { products, getProducts } = useContext(ProductsContext);
  const [search, setSearch] = useState(""); // ✅ nuevo
  const [filtered, setFiltered] = useState([]); // ✅ nuevo

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(products);
    } else {
      const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredProducts);
    }
  }, [search, products]);

  if (!products || products.length === 0) return <p>No hay productos disponibles</p>;

  return (
    <div className="product-list-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-list">
        {filtered.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
