import { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main style={{ padding: '1rem' }}>
        <h1>Bienvenido a mi E-Commerce</h1>
        
        <p className="read-the-docs">
          Pronto aquí verás tus productos y ofertas.
        </p>
      </main>
    </>
  );
}

export default App;
