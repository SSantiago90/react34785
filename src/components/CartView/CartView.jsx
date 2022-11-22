import React, { useContext } from "react";
import { createBuyOrderFirestoreWithStock } from "../../services/firebase";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BuyForm from "./BuyForm";

function CartView() {
  const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext);
  const navigate = useNavigate();

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  function createBuyOrder(userData) {
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };

    createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
      clear();
      navigate(`/checkout/${orderId}`);
      Swal.fire({
        title: `Gracias por tu compra`,
        text: `El identificador de tu orden es ${orderId}`,
        icon: "success",
      });
    });
  }

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

      <BuyForm onSubmit={createBuyOrder} />
    </div>
  );
}

export default CartView;
