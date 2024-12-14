import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app.js";
import reportWebVitals from "./report-web-vitals.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
