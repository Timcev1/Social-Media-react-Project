import React, { Component} from 'react';
import {connect} from 'react-redux';
import {updatePostFormData} from '../actions/postform.js';
import {createPost} from '../actions/posts.js';

 class PostForm extends Component{

   handleOnChange = event => {
     const { name, value } = event.target;
     const currentPostFormData = Object.assign({}, this.props.postFormData, {
       [name]: value
     })
     this.props.updatePostFormData(currentPostFormData)
   }

   handleOnSubmit = event => {
     event.preventDefault()
     this.props.createPost(this.props.postFormData)
   }
   render(){
     const { title, content} = this.props.postFormData;
     return (
       <div className="postform">
        <h3> Add a post</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Title of Post: </label>
            <input type="text" name="title" value={title} onChange={this.handleOnChange}/>
          </div>
          <div>
            <label htmlFor="Content">Content: </label>
            <input type="text" name="content" value={content} onChange={this.handleOnChange}/>
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
      )
   }
 }

 const mapStateToProps = state => {
   return {
     postFormData: state.postFormData
   }
 }
export default connect(mapStateToProps, {updatePostFormData, createPost})(PostForm);
