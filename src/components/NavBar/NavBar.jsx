import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">
      <h3>Mi tienda</h3>
      <a href="/">Categoría A</a>
      <a href="/">Categoría B</a>
      <a href="/">Categoría C</a>
      <CartWidget />
      {/* Importar y renderizar  acá el CartWidget */}
    </nav>
  );
}

export default NavBar;
