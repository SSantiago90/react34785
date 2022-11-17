import React, { useContext } from "react";
import { createBuyOrderFirestoreWithStock } from "../../services/firebase";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";
import Swal from "sweetalert2";
// 1. consumir el context -> importamos el context y importamos el useContext
// 2. mostrar un listado de items del array del context
import { useNavigate } from "react-router-dom";

function CartView() {
  const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext);
  const navigate = useNavigate();

  if (cart.length === 0) return <h1>Carrito Vacio</h1>;

  function createBuyOrder() {
    /* { buyer: { name, phone, email }, items: [{id, title, price}], total  } */

    const buyData = {
      buyer: {
        name: "Comision 34785",
        phone: "123",
        email: "santiago@gmail.com",
      },
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };

    createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
      console.log(orderId);
      clear();

      navigate(`/checkout/${orderId}`); //useParams()

      Swal.fire({
        title: `Gracias por tu compra`,
        text: `El identificador de tu orden es ${orderId}`,
        icon: "success",
      });
      // mostrarle "algo" al usuario
      // corregir el stock?
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
      <Button onClick={createBuyOrder}>Finalizar Compra</Button>
      <h2>Total a pagar: ${totalPriceInCart()}</h2>
    </div>
  );
}

export default CartView;
