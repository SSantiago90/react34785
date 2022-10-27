import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI from "../../mockService/mockService";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getItemsFromAPI().then((itemsDB) => {
      setProductsList(itemsDB);
    });
  }, []);

  return <ItemList productsList={productsList} />;
}

export default ItemListContainer;
