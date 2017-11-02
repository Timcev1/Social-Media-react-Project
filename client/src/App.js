import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import Posts from './components/postcontainer.js';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="router">
          <NavBar />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
