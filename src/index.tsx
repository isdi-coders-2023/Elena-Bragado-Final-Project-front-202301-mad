import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Provider from "react-redux/es/components/Provider";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
