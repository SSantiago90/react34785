//1. Importamos el hook de Ciclo de Vida
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./item.css";

function Item(props) {
  //2. Inicializo mi estado con el hook, y le damos un valor inicial
  const [isFavorite, setIsFavorite] = useState(false);
  const [textFavorite, setTextFavorite] = useState("No estoy en favoritos");

  console.log("%cRender del componente", "color: pink");

  useEffect(() => {
    console.log("%cMontaje del componente", "color: lightblue");
    return( ()=> { console.log("Componente desmontado")})
  }, []);

  useEffect( () => {
    console.log("%cUpdate del componente", "color: lightgreen");
  }, [isFavorite] )


  function handleFavorite() {
    setIsFavorite(!isFavorite);
    setTextFavorite("Estoy en favoritos!");
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";

  /* let classButtonFavorite = "";
  if (isFavorite === true){
    classButtonFavorite = "card-favicon favorite";
  }
  else{
    classButtonFavorite = "card-favicon";
  } */

  return (
    <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        ♥
      </button>
      <p>{textFavorite}</p>
      <div className="card-img">
        <img src={props.imgurl} alt="Product img" />
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
