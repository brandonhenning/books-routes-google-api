import React, { Component } from "react";
import Login from "./Login";

class App extends Component {
  state = { newUser: null };

  sendLoginRequest = (email, password) => {
    fetch(`/${email}/${password}`)
    .then(result => {
      console.log(result)
    })
    .then(result => {
      console.log(result)
    })
  }

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
