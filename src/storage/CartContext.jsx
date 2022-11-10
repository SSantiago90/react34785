import { useState, createContext } from "react";
//1- Inicializamos el context con CreateContext

const cartContext = createContext();

// 2. Definimos nuestro Provider
export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(itemData) {
    let itemFound = cart.find((itemInCart) => itemInCart.id === itemData.id);

    if (itemFound) {
      let newCart = cart.map((itemInCart) => {
        if (itemInCart.id === itemData.id) {
          itemInCart.count += itemData.count;
          return itemInCart;
        } else {
          return itemInCart;
        }
      });

      setCart(newCart);
    } else {
      const newCart = [...cart];
      newCart.push(itemData);
      setCart(newCart);
    }
    /* else {
      setCart((newCart) => {
        newCart.push(itemData);
        return newCart;
      });
    } */
  }

  function totalItemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.count;
    });
    return total;
  }

  function totalPriceInCart() {
    return 8500;
  }

  function removeItem(itemId) {
    console.log("Removiendo el item", itemId);
    /*  cart.filter */

  }

  function clear() {
    /*  */
  }

  const value = {
    cart,
    addToCart,
    totalItemsInCart,
    removeItem,
    totalPriceInCart
  };

  //3.Creamos el "value" para los componentes que consuman el context

  return (
    //4. retornamos el Context Provider con el value creado
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
}

export default cartContext;
