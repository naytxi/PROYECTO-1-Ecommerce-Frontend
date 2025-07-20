import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Perfil.scss';

const Perfil = () => {
  const { user, token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [pedidos, setPedidos] = useState([]);
  const [loadingPedidos, setLoadingPedidos] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      if (!token) return;
      try {
        const res = await axios.get('http://localhost:3000/pedidos/usuario', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPedidos(res.data);
      } catch (error) {
        console.error('Error al cargar pedidos:', error);
      } finally {
        setLoadingPedidos(false);
      }
    };

    fetchPedidos();
  }, [token]);

  if (!user) {
    return <div className="perfil-container">Cargando perfil...</div>;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="perfil-container">
      <div className="perfil-box">
        <h2 className="perfil-title">Mi Perfil</h2>
        <div className="perfil-dato">
          <span className="label">Nombre:</span>
          <span>{user.name}</span>
        </div>
        <div className="perfil-dato">
          <span className="label">Correo:</span>
          <span>{user.email}</span>
        </div>
        <div className="perfil-dato">
          <span className="label">Rol:</span>
          <span>{user.role}</span>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>

      <div className="pedidos-container" >
        <h2>Mis Pedidos</h2>
        {loadingPedidos ? (
          <p>Cargando pedidos...</p>
        ) : pedidos.length === 0 ? (
          <p>No has realizado pedidos todavía.</p>
        ) : (
          pedidos.map((pedido) => (
            <div key={pedido.id} className="pedido-item">
              <p>
                <strong>Pedido #{pedido.id}</strong> - {new Date(pedido.createdAt).toLocaleDateString()}
              </p>
              <ul>
                {pedido.Productos.map((producto) => (
                  <li key={producto.id}>
                    {producto.name} - Cantidad: {producto.Pedidoproductos.cantidad}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Perfil;
