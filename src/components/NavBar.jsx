import Button from "./Button/Button";

function NavBar() {
  return (
    <>
      <h3>Mi tienda</h3>      
      <Button color="pink">Click me</Button>
      <Button>Login</Button>
      <Button color="red">Logout</Button>
      {/* Importar y renderizar  acá el CartWidget */}
    </>
  );
}

export default NavBar;
