import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { I18Provider, LOCALES } from "./i18n";
import Wrapper from "./component/Context/Wrapper";

ReactDOM.render(
  // <React.StrictMode>
  // <I18Provider locale={LOCALES.SPANISH}>
  <Wrapper>
    <App />
  </Wrapper>,
  // {/* </I18Provider>, */}
  // </React.StrictMode>
  document.getElementById("root")
);
