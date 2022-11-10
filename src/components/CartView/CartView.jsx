import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";

// 1. consumir el context -> importamos el context y importamos el useContext
// 2. mostrar un listado de items del array del context

function CartView() {
  const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext);

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  return (
    <div>
      <h1>Este es el contenido de tu carrito</h1>
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          <img src={cartItem.thumbnail} alt={cartItem.title} />
          <h3>{cartItem.title}</h3>
          <h4>$ {cartItem.price}</h4>
          <h4>Cantidad: {cartItem.count}</h4>
          <h4>Precio a pagar: {cartItem.count * cartItem.price}</h4>
          <Button onClick={() => removeItem(cartItem.id)} type="danger">
            X
          </Button>
        </div>
      ))}
      <Button type="danger" onClick={clear}>
        Vaciar Carrito
      </Button>
      <h2>Total a pagar: ${totalPriceInCart()}</h2>
    </div>
  );
}

export default CartView;
