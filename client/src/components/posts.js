import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/posts';
import PostCard from './postcard.js';
import { push } from "react-router-redux";
import { Pagination } from "react-bootstrap";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      current_page: 1,
      per_page: 3,
      page: 1
      };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.getPosts(this.state.page)
  }

  render() {
    const {posts, page} = this.props;
    const {per_page,current_page} = this.state
    const indexOfLastPost = current_page * per_page;
    const indexOfFirstPost = indexOfLastPost - per_page;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const renderPosts = currentPosts.map((post, index) => {
      return( <PostCard key={index} post={post} />
    )});
    const pageNumbers = []
    for( let i = 1; i <= Math.ceil(posts.length / per_page); i++){
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>{number}</li>
      );
    });

    return (
      <div>
        <ul className="post-page-numbers">
          {renderPageNumbers}
        </ul>
        <ul>
          {renderPosts}
        </ul>
      </div>
    );
  }

  handleClick(event) {
    this.props.getPosts(event.target.id)
  }
};

const mapStateToProps = (state) => {
  return ({
    posts: state.posts,
  })
}

export default connect(mapStateToProps, {getPosts})(Posts);
