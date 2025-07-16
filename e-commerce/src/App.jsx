import { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
//import Home from './components/Home';
import Footer from './components/Footer';
import ProductList from './components/Products/ProductList';


/*function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
        <Home />
     <Footer />
    </>
  );
}*/

function App() {
  return (
    <>
      <Header />
        <h1>Productos</h1>
        <ProductList />
      <Footer />
    </>
  );
}



export default App;
