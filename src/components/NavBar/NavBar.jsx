import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import "./navbar.css";

// 3. Remplazar etiquetas HTML <a> por componentes <Link>
function NavBar() {
  return (
    <nav className="nav-menu">
      <Link to="/">
        <h3>Mi tienda</h3>
      </Link>

      <Link to="/category/smartphones">Smartphones</Link>
      <Link to="/category/laptops">Laptops</Link>
      <Link to="/category/fragrances">Fragancias</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
