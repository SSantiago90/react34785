//1. Importamos el hook de Ciclo de Vida
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./item.css";

function Item({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  let urlDetail = `/detalle/${product.id}`;

  let stylePrice = { color: product.discount? 'green' : 'inherit' }
  
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
        {/* Rendering condicional con operador lógico AND && */}
        {product.discount && (
          <h4 className="offer">Descuento: {product.discount}%</h4>
        )}        
        <h4 style={ stylePrice } className="priceTag">$ {product.price}</h4>
      </div>
      <Link to={urlDetail}>
        <Button>Ver más!</Button>
      </Link>
    </div>
  );
}

export default Item;
