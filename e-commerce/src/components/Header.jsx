import React from 'react';
import '../styles/Header.scss';
// import { Link } from 'react-router-dom';

import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
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
          {/* <Link to="/login"> */}
            <FiUser className="header__icon" />
          {/* </Link> */}
          {/* <Link to="/carrito"> */}
            <FiShoppingCart className="header__icon" />
          {/* </Link> */}
        </div>
      </div>

      <nav className="header__nav">
        <ul className="nav__list">
          {/* <li><Link to="/">Home</Link></li> */}
          <li><span>Home</span></li>
          {/* <li><Link to="/productos">Productos</Link></li> */}
          <li><span>Productos</span></li>
          {/* <li><Link to="/nosotros">Nosotros</Link></li> */}
          <li><span>Nosotros</span></li>
          {/* <li><Link to="/contacto">Contacto</Link></li> */}
          <li><span>Contacto</span></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
