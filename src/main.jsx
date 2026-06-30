import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LowerThird from "./Components/LowerThird/LowerThird.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <LowerThird />
  </StrictMode>,
);
