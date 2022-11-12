import React from "react";
import ReactDOM from "react-dom/client";
import { MuseoApp } from "./Components/MuseoApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./Components/App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
