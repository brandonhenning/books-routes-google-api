import React, { Component } from "react";

class Login extends Component {
  state = { email: "", password: "" };

  handleEmailInputChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordInputChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.sendLoginRequest(this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="ui large form">
          <div className="field">
            <div className="ui left icon input">
              <i className="envelope icon" />
              <input
                value={this.state.email}
                onChange={this.handleEmailInputChange}
                type="email"
                name="email"
                placeholder="johnny@appleseed.com"
              />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon" />
              <input
                value={this.state.password}
                onChange={this.handlePasswordInputChange}
                type="password"
                name="password"
                placeholder="appleLover420"
              />
            </div>
          </div>
          <button className="ui large violet button" type="submit">
            login
          </button>
          <button className="ui large violet button" type="submit">
            sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
