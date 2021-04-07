import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./landing.page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppLayout from "./app.layout";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Protected React Router</h1>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/app" component={AppLayout} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
