import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/nosotros" element={<Nosotros />} />     
          <Route path="/contacto" element={<Contacto />} />   
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

