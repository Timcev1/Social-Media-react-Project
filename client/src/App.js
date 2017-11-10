import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Posts from './containers/postcontainer.js';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import PostForm from './components/postform.js'
import './App.css';
import Head from './components/head.js'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [],
      username: 'guest'
    }
  }

  render(){
    let user = this.state.username

    return(
      <div className="app">
      <Head />
      <Router>
        <div className="router">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
        </div>
     </Router>
     <div className="container-fluid">
      <div className="row title justify-content-center" style={{paddingtop: '12px'}}>
          <p>Hello, {this.state.username}!</p>
      </div>
    </div>
    </div>
    )
  }
}
export default App;
