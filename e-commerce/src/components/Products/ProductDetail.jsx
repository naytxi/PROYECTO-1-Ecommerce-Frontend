import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/productos/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      {product.image && (
        <img src={product.image} alt={product.name} />
      )}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price} €</span>
      {/* Puedes agregar categorías, reviews, etc. más adelante */}
    </div>
  );
};

export default ProductDetail;
