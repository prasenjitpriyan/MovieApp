import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ThemeProvider from "./context/ThemeProvider";
import NotificationProvider from "./context/NotificationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NotificationProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </NotificationProvider>
  </BrowserRouter>
);
