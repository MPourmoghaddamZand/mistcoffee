import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileNav from "./components/Layout/MobileNav.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-myback overflow-x-hidden">
      <App />
    </div>
  </StrictMode>
);
