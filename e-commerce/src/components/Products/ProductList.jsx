
import React, { useContext, useEffect, useState  } from "react";
import ProductCard from "./ProductCard";
import "../../styles/Product.scss";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const ProductList = () => {
  const { products, getProducts } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [sort, setSort] = useState(""); 

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Ordenamiento
    switch (sort) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priceLow":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFiltered(result);
  }, [search, sort, products]);

  if (!products || products.length === 0) return <p>No hay productos disponibles</p>;

  return (
    <div className="product-list-page">
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Buscar productos por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Ordenar por...</option>
          <option value="az">Nombre A-Z</option>
          <option value="za">Nombre Z-A</option>
          <option value="priceLow">Precio: menor a mayor</option>
          <option value="priceHigh">Precio: mayor a menor</option>
        </select>
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

