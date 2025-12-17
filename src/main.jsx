import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ShippingBoxContextProvider } from "./context/shippingBoxContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShippingBoxContextProvider>
      <App />
    </ShippingBoxContextProvider>
  </StrictMode>
);
