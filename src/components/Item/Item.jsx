//1. Importamos el hook de Ciclo de Vida
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./item.css";

function Item({product}) {
  const [isFavorite, setIsFavorite] = useState(false);

 
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";


  return (
    <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        ♥
      </button>
      <div className="card-img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Button>Ver más!</Button>
    </div>
  );
}

export default Item;
