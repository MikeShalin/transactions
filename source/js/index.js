import React from "react";
import ReactDOM from "react-dom";
import App from "js/components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "sacc/base.scss";

import createStore from "./store";

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
