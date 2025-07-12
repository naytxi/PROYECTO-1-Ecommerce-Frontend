import React from 'react';
import '../styles/Header.scss';
// import { Link } from 'react-router-dom'; 

import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
