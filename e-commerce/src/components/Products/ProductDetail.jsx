import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductsContext } from "../../context/ProductsContext/ProductsState"; 
import '../../styles/ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addCart } = useContext(ProductsContext);
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

  const handleAddToCart = () => {
    if (product) {
      addCart(product);
      alert(`${product.name} añadido al carrito!`);
    }
  };

  if (loading) return <p className="loading-message">Cargando producto...</p>;
  if (!product) return <p className="not-found-message">Producto no encontrado</p>;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {product.image && (
          <img src={product.image} alt={product.name} className="product-detail-image" />
        )}
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="product-detail-description">{product.description}</p>
          <span className="product-detail-price">{product.price} €</span>
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;