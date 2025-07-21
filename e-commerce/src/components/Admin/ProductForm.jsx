import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import "../../styles/ProductForm.scss";

const ProductForm = ({ initialData = null, onSuccess, onCancel }) => {
  const { token } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    categoryId: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.description || "",
        price: initialData.price || "",
        image: initialData.image || "",
        categoryId: initialData.categoryId || ""
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (initialData) {
        await axios.put(`http://localhost:3000/productos/${initialData.id}`, form, config);
      } else {
        await axios.post("http://localhost:3000/productos", form, config);
      }

      onSuccess(); // recargar productos
    } catch (err) {
      console.error("Error al guardar producto:", err);
      alert("Ocurrió un error");
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>{initialData ? "Editar Producto" : "Nuevo Producto"}</h3>
      
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Precio" value={form.price} onChange={handleChange} required />
      <input name="image" placeholder="URL de la imagen" value={form.image} onChange={handleChange} required />
      <input name="categoryId" placeholder="ID de categoría" value={form.categoryId} onChange={handleChange} required />

      <div className="form-buttons">
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default ProductForm;
