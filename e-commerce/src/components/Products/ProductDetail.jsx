import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // 🆔 ID desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/productos/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price} €</span>
      {/* Puedes agregar categorías, reviews, etc. más adelante */}
    </div>
  );
};

export default ProductDetail;
