import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let id = useParams().id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  // early return - retorn anticipado
  if (isLoading) return <Loader color="blue" />;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
