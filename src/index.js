import "./CSS/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./Code/App";

const Loader = () => <div>...</div>;

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Suspense>,
  document.getElementById("root")
);
