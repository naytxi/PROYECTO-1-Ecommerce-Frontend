import { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
        <Home />
     <Footer />
    </>
  );
}

export default App;
