import React, { Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from './posts.js'

 class PostForm extends Component{
  constructor(props) {
    super(props)
    this.state ={
      title: '',
      content: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_POST',
      title: this.state.title,
      content: this.state.content
    });
  };

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-4">
            <div className="panel panel-defualt">
              <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label htmlFor="title" className="col-md-4 control-label">Post Title</label>
                  <div className="col-md-5">
                    <input className="form-control" value={this.state.title} name="title" onChange={this.handleOnChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">Content</label>
                  <div className="col-md-5">
                    <textarea className="form-control" type="text" value={this.state.content} name="content" onChange={this.handleOnChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">Add a post</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    todos: state.todos
  };
}

const mapDispatchToProps=(dispatch)=>{
  return ({
    addPost: addPost
  }, dispatch);
}

export default PostForm;
