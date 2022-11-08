import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MusicaProvider from "./context/MusicaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MusicaProvider>
    <App />
  </MusicaProvider>
);
