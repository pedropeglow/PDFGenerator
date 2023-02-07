import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactGA from "react-ga";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const { REACT_APP_TRACKINGID } = process.env;

// Inicializando o Google Analytics
if (process.env.REACT_APP_TRACKINGID != null) {
  ReactGA.initialize(REACT_APP_TRACKINGID, {
    cookieDomain: "auto",
  });

  history.listen((location) => {
    ReactGA.set({ page: window.location.href }); // Update the user's current page
    ReactGA.pageview(window.location.href); // Record a pageview for the given page
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
