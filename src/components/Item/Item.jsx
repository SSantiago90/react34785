import React from "react";
import Button from "../Button/Button";
import "./item.css";

function Item(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgurl} alt="Product img"/>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <h4 className="priceTag">$ {props.price}</h4>
      </div>
      <Button>Ver más!</Button>
    </div>
  );
}

export default Item;
