import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateWatch from "./components/create-watch.component";
import EditWatch from "./components/edit-watch.component";
import WatchList from "./components/watch-list.component";

//import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Streaming App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Watch</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Watch List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={WatchList} />
          <Route path="/edit/:id" component={EditWatch} />
          <Route path="/create" component={CreateWatch} />
        </div>
      </Router>
    );
  }
}

export default App;