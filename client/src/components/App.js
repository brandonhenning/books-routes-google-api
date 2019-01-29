import React, { Component } from "react";
import Login from "./Login";

class App extends Component {
  state = { newUser: null };

  sendLoginRequest = (email, password) => {
    fetch(`http://localhost:5000/${email}/${password}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui centered grid">
          <div
            style={{
              maxWidth: "50%",
              backgroundColor: "#f2d2e4",
              marginTop: "50px"
            }}
            className="column"
          >
            <Login sendLoginRequest={this.sendLoginRequest} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
