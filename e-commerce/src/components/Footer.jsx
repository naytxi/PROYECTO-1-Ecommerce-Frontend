import React from 'react';
import '../styles/Footer.scss';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src="/logo.png" alt="Logo" className="footer__logo" />
      </div>

      <div className="footer__center">
        <div className="footer__socials">
          <FiFacebook className="footer__icon" />
          <FiInstagram className="footer__icon" />
          <FiTwitter className="footer__icon" />
        </div>
        <p className="footer__text">© Second Lifes. All rights reserved.</p>
      </div>

      <div className="footer__right">
        <span className="footer__privacy">Política de privacidad</span>
      </div>
    </footer>
  );
};

export default Footer;
