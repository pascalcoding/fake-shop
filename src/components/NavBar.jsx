import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>Fake Tea Shop</h1>
      <div className="links">
        <a>Home</a>
        <a>Shop</a>
        <a>Shopping Cart</a>
      </div>
    </nav>
  );
}

export default NavBar;
