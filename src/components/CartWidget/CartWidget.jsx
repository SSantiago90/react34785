import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
//6. Para consumir el context importamos el cartContext y el hook useContext()

function CartWidget() {
  //7. Invocamos useContext(contexto) y recibimos el VALUE del provider
  const { totalItemsInCart } = useContext(cartContext);
  return (
    <div>
      <div>🛒</div>
      <small>{totalItemsInCart()}</small>
    </div>
  );
}

export default CartWidget;
