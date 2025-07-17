import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
// import { useContext, useEffect } from "react"
//import { ProductsContext } from "../../context/ProductsContext/ProductsState"
import '../../styles/Product.scss'
import axios from "axios"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/productos")
      setProducts(res.data);
    } catch (error) {
      console.error("Error al cargar productos:", error)
    }
  }

  return (
    <div className="product-list">
      {Array.isArray(products) && products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}

    </div>
  )
}

export default ProductList
