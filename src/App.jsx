import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import statement
import Shop from './components/pages/Shop';
import ProductPage from './components/pages/ProductPage';

function App() {
  const [products, setProdcuts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch(
        'https://fakestoreapi.com/products/category/electronics'
      );
      const data = await reponse.json();
      setProdcuts(() => data);
      setLoading(() => false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop products={products} />} />
        <Route
          path="/Shop/product/:id"
          element={<ProductPage products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
