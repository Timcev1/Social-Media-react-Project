import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Posts from './containers/postcontainer.js';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import './App.css';
import Head from './components/head.js';
import allUsers from './components/allusers';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [],
      users: []
    }
  }

  render(){

    return(
      <div className="app">
      <Head />
      <Router>
        <div className="router">
          <NavBar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/users" component={allUsers} />
        </div>
     </Router>
     <div className="container-fluid">
      <div className="row title justify-content-center" style={{paddingtop: '12px'}}>
      </div>
    </div>
    </div>
    )
  }
}
export default App;
