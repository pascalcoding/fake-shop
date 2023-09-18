import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        'https://fakestoreapi.com/products/category/electronics'
      );
      const data = await reponse.json();
      setProdcuts(() => data);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
