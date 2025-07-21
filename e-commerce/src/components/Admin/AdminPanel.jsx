import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import ProductForm from "./ProductForm";
import "../../styles/AdminPanel.scss";

const AdminPanel = () => {
  const { token, user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/productos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar este producto?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/productos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  const handleCreate = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  // ✅ Esto debe ir después de los hooks
  if (!user || user.role !== "admin") {
    return <p style={{ padding: "2rem", color: "red" }}>Acceso denegado. Solo para administradores.</p>;
  }

  return (
    <div className="admin-panel">
      <h2 className="admin-title">Panel de administración de productos</h2>


      {!showForm && (
        <>
          <button className="create-btn" onClick={handleCreate}>
            + Crear nuevo producto
          </button>

          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.price} €</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(prod)}>Editar</button>
                    <button className="delete-btn" onClick={() => handleDelete(prod.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {showForm && (
        <ProductForm
          initialData={editingProduct}
          onSuccess={() => {
            fetchProducts();
            setShowForm(false);
          }}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default AdminPanel;
