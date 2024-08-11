import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollReveal from "scrollreveal";
export const sr = ScrollReveal({
  duration: 2600,
  origin: "top",
  distance: "60px",
  delay: 400
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
