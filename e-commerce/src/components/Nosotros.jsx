import React from 'react';
import '../styles/Nosotros.scss';

const Nosotros = () => {
  return (
    <div className="nosotros">
      <h2>Sobre nosotros</h2>

      <section className="nosotros__historia">
        <p>
          Hace ya <strong>más de 5 años</strong>, nació 2Lifes con una misión clara: darle una segunda vida a los objetos que aún tienen mucho que ofrecer. 
          En un mundo dominado por el consumo rápido, decidimos apostar por la sostenibilidad, la economía circular y la conciencia ambiental.
        </p>
      </section>

      <section className="nosotros__valores">
        <h3>Nuestros valores</h3>
        <ul>
          <li><strong>🌱 Sostenibilidad:</strong> creemos que cada objeto merece otra oportunidad antes de convertirse en residuo.</li>
          <li><strong>💛 Comunidad:</strong> fomentamos el intercambio responsable entre personas con una visión consciente del consumo.</li>
          <li><strong>♻️ Reutilización:</strong> damos valor a lo que otros desechan, encontrando nuevas historias en cada producto.</li>
          <li><strong>🤝 Transparencia:</strong> trabajamos con honestidad para generar confianza y compromiso con nuestros usuarios.</li>
        </ul>
      </section>

      <section className="nosotros__mision">
        <p>
          Hoy somos una comunidad en crecimiento que cree que un mundo mejor empieza con decisiones pequeñas.
          Gracias por formar parte de este movimiento. Juntos, transformamos el presente, pieza por pieza.
        </p>
      </section>
    </div>
  );
};

export default Nosotros;
