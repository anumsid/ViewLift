import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./components/app/LoginPage";
import "./index.scss";

const App = () => (
  <LoginPage />
);

ReactDOM.render(<App />, document.getElementById("root"));
