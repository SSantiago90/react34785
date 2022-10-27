import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../mockService/mockService";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleItemFromAPI().then((itemsDB) => {
      setProduct(itemsDB);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
