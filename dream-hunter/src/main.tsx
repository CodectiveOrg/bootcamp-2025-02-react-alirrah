import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./i18n.ts";

import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
