import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/posts';
import PostCard from './postcard.js';

class Posts extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render() {
    return(
      <div className="PostsContainer">
        <h2> Posts</h2>
        {this.props.posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    posts: state.posts
  })
}

export default connect(mapStateToProps, {getPosts})(Posts);
