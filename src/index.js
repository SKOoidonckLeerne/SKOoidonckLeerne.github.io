import "./CSS/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./Code/App";

const Loader = () => <div>...</div>;

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <HashRouter>
      <App />
    </HashRouter>
  </React.Suspense>,
  document.getElementById("root")
);
