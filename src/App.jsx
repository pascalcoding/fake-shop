import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import statement
import Shop from './components/pages/Shop';
import ProductPage from './components/pages/ProductPage';
import ShoppingCart from './components/pages/ShoppingCart';

function App() {
  const [products, setProdcuts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://fakestoreapi.com/products/category/electronics',
        { mode: 'cors' }
      );
      const data = await response.json();
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
          element={
            <ProductPage
              products={products}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
