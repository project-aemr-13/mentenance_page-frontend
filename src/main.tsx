import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </StrictMode>
);
