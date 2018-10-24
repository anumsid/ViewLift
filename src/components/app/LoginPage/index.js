import React from "react";
import PropTypes from "prop-types";
import Input from "../../core/Input";
import Button from "../../core/Button";
import "./index.scss";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { loginError: false, values: { email: "", password: "" } };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { id, value } = e.target;
    this.setState(prevState => ({ values: { ...prevState.values, [id]: value } }));
  }

  onSubmit(e) {
    e.preventDefault();
    const { logIn } = this.props;
    const { values } = this.state;
    if (values.email === "test@test.com" && values.password === "pass") {
      logIn();
    } else {
      this.setState({ loginError: true });
    }
  }

  render() {
    const { loginError, values } = this.state;
    return (
      <div className="form-wrapper">
        <form onSubmit={this.onSubmit} className="login-form">
          <Input type="email" id="email" label="Email" value={values.email} onChange={this.onChange} />
          <Input type="password" id="password" label="Password" value={values.password} onChange={this.onChange} />
          <Button type="submit" label="Log In" />
          {
            loginError && <div className="error">Incorrect Username or Password</div>
          }
        </form>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = {
  logIn: PropTypes.func.isRequired,
};
