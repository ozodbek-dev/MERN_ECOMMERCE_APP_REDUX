import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { position, transition, Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  setTimeout:5000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.FADE
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
