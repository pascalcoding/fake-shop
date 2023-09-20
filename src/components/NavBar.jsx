import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>Fake Elecetronics Shop</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/shoppingcart">Shopping Cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;
