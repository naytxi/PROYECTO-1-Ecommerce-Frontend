import React from 'react';
import '../styles/Contacto.scss';

const Contacto = () => {
  return (
    <div className="contacto">
      <h2>Contáctanos</h2>
      <p>Si tienes preguntas o sugerencias, escríbenos a:</p>
      <p><strong>2lifes@gmail.com</strong></p>

      <div className="contacto__contenido">
        <form className="contacto__formulario">
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" required />

          <label>Email:</label>
          <input type="email" placeholder="Tu correo" required />

          <label>Mensaje:</label>
          <textarea placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>

        <div className="contacto__mapa">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.686569395328!2d-2.939904284402479!3d43.263012079135566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4f4e34d646db%3A0x8d321c3e7a7c3ef6!2sBilbao%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1660000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
