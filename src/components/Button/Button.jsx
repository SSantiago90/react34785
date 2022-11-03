import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorState, setColorState] = useState({
    backgroundColor: props.color,
    borderColor: "red",
  });

  return (
    <button onClick={props.onClick} style={colorState} className="btn">
      {props.children}
    </button>
  );
}

export default Button;
