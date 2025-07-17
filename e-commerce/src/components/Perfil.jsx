import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Perfil.scss';

const Perfil = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

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
    </div>
  );
};

export default Perfil;
