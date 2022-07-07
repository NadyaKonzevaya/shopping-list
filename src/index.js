import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "components/App";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)


// для версии реакта 18 и выше - другой синтаксис:

// const root = ReactDom.createElement(document.getElementById("root"));

// root.render (
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
