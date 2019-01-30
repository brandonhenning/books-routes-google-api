import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./Login";
import Header from "./Header";
import SearchBar from './SearchBar';

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
        <BrowserRouter>
          <div>
            <Header />

            <Route path="/" exact render={() => <h3>this is the home page :)</h3>} />
            <Route path="/search" exact component={SearchBar} />
            <Route path="/login" exact render={() => {
              return <Login sendLoginRequest={this.sendLoginRequest} />
            }} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
