import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Pruebas from "./Pruebas";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <Pruebas />
  </React.StrictMode>
);
