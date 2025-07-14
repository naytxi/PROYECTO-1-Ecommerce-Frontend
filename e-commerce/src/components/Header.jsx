
import React, { useContext } from 'react';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';

import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <img src="/logo.png" alt="Logo" className="header__logo" />
        </div>

        <div className="header__center">
          <div className="header__search">
            <input type="text" placeholder="Buscar productos..." />
            <FiSearch className="header__search-icon" />
          </div>
        </div>

        <div className="header__right">
          {user ? (
            <Link to="/perfil" className="header__username">
              {user.name}
            </Link>
          ) : (
            <Link to="/login">
              <FiUser className="header__icon" />
            </Link>
          )}
          <FiShoppingCart className="header__icon" />
        </div>
      </div>

      <nav className="header__nav">
        <ul className="nav__list">
          <li><Link to="/">Home</Link></li>
          <li><span>Productos</span></li>
          <li><span>Nosotros</span></li>
          <li><span>Contacto</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
