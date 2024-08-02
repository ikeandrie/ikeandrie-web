import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/globals.css";

import { App } from "../layouts/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
