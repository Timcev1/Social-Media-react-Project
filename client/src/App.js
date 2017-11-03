import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Posts from './components/postcontainer.js';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import PostForm from './components/postform.js'
import './App.css';

export class App extends Component {
  render(){
    return(
      <div className="app">
      <Router>
        <div className="router">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
        </div>
     </Router>
     <div className="container-fluid">
      <div className="row title justify-content-center" style={{paddingtop: '12px'}}>
        <h1> Post Maker</h1>
      </div>
      <PostForm />
    </div>
    </div>
    )
  }
}
export default App;
