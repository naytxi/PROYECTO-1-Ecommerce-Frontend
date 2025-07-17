import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../../styles/Product.scss";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/productos");
      setProducts(res.data); // verificar que es un array 
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="product-list">
      {Array.isArray(products) && products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductList;

