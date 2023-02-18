import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvader } from "./ContextProvader";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvader>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvader>
);
