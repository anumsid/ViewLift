import React from "react";
import ReactDOM from "react-dom";
import MoviePage from "./components/app/MoviePage";
import LoginPage from "./components/app/LoginPage";
import "./index.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    this.setState({ loggedIn: true });
  }

  render() {
    const { loggedIn } = this.state;
    return loggedIn
      ? <MoviePage />
      : <LoginPage logIn={this.logIn} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
