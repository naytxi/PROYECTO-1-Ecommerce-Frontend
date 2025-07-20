import React, { useState, useEffect } from 'react';
import '../styles/Home.scss';

const destacados = [
  {
    id: 1,
    nombre: 'Levis 501',
    precio: 'Desde 55,99€',
    imagen: '/jeans.jpg',
  },
  {
    id: 2,
    nombre: 'Ipad Model 2',
    precio: 'Desde 87,50€',
    imagen: '/ipad.jpg', 
  },
  {
    id: 3,
    nombre: 'Mesa rústica francesa',
    precio: 'Desde 46,20€',
    imagen: '/mesa.jpg', 
  },
  {
    id: 4,
    nombre: 'Biblia antigua',
    precio: 'Desde 9,99€',
    imagen: '/biblia.jpg', 
  },
];

const carruselImagenes = [
  '/libros.jpg',
  '/ordenador.jpg',
  '/ropa.jpg',
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carruselImagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="home">
      <section className="home__hero">
        <img
          src={carruselImagenes[index]}
          alt="Hero"
          className="home__image"
        />
        <div className="home__lema">
          <h2>Los objetos sí merecen una segunda oportunidad,<br />tu ex no.</h2>
        </div>
      </section>

      <section className="home__destacados">
        <h3>Destacados de la semana</h3>
        <div className="home__grid">
          {destacados.map((producto) => (
            <div key={producto.id} className="home__card">
              <img src={producto.imagen} alt={producto.nombre} className="home__card-img" />
              <div className="home__card-info">
                <h4>{producto.nombre}</h4>
                <p>{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
