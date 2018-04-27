import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/posts';
import PostCard from './postcard.js';
import { push } from "react-router-redux";
import { Pagination } from "react-bootstrap";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
      };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.getPosts(this.state.page)
  }

  render() {
    const posts = this.props.posts.list
    const pages = this.props.posts.pages
    function renderedposts(posts) {
      if (posts === undefined){
        return <div>Loading.... </div>
      }else{
        return(
            <div>
                {posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        )};
      }
    const renderPosts = renderedposts(this.props.posts.posts)
    const pageNumbers = []
    for( let i = 1; i <= pages; i++){
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={'page' + number} className={number}>
          <a onClick={()=> {this.handleClick(number)}}>{number}</a>
        </li>
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

  handleClick(number) {
    this.props.getPosts(number)
  }
};

const mapStateToProps = (state) => {
  return ({
    posts: state.posts,
  })
}

export default connect(mapStateToProps, {getPosts})(Posts);
