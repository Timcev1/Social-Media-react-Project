import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import logo from './logo.svg';
import Posts from './components/postcontainer.js';
import NavBar from './components/navbar.js';
import Home from './components/home.js';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {}
    this.getPosts = this.getPosts.bind(this)
    this.getPost = this.getPost.bind(this)
  }
  componentDidMount(){
    this.getPosts
  }
  fetch(endpoint){
    return new Promise((resolve, reject) =>{
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getPosts(){
    this.fetch('api/posts')
    .then(posts =>{
      this.setstate({posts: posts})
      posts[0] && this.getPost(posts[0].id)
    })
  }
  getPost(id){
    this.fetch(`api/drinks/${id}`)
    .then(post => this.setstate({post: post}))
  }
  render() {
    let {posts, post} = this.state
    return (
      <Router>
        <div className="router">
          <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;
