import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/posts';

class Posts extends Component {
  componentDidMount(){
    this.props.getPosts
  }
  render() {
    return (
      <div>
        <h1> Post Component </h1>
        {this.props.posts.map(post =>
          <div key={post.id} className="postcontainer">
          <h3>{post.title}</h3>
          <p> Content: {post.content}</p>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return ({
    posts: state.posts
  })
}
export default connect(mapStateToProps, {getPosts})(Posts)
