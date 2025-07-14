
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/Perfil.scss';

const Perfil = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="perfil-container">Cargando perfil...</div>;
  }

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
      </div>
    </div>
  );
};

export default Perfil;
