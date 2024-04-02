import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

document.body.style.overflow = "auto";
document.body.style.paddingRight = "0px !important";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
