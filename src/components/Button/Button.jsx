import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorState, setColorState] = useState({
    backgroundColor: props.color,
  });

  return (
    <button
      onClick={props.onClick}
      style={colorState}
      className={`btn ${props.type || ""}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
