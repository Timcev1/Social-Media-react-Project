import React, { Component} from 'react';
import {connect} from 'react-redux';
import {reduxform} from 'redux-form';
import {updateUserFormData} from '../actions/userform';
import {createUser} from '../actions/users';

 class UserForm extends Component{

   handleOnChange = event => {
     const { name, value } = event.target;
     const currentUserFormData = Object.assign({}, this.props.userFormData, {
       [name]: value
     })
     this.props.updateUserFormData(currentUserFormData)
   }

   handleOnSubmit = event => {
     event.preventDefault()
     this.props.createUser(this.props.userFormData)
   }
   render(){
     const { username, password} = this.props.userFormData;
     return (
       <div className="userform">
        <h3> Add a User</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Username: </label>
            <input type="text" name="username" value={username} onChange={this.handleOnChange}/>
          </div>
          <div>
            <label htmlFor="Content">Password: </label>
            <input type="text" name="password" value={password} onChange={this.handleOnChange}/>
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
      )
   }
 }

 const mapStateToProps = state => {
   return {
     userFormData: state.userFormData
   }
 }
export default connect(mapStateToProps, {updateUserFormData, createUser})(UserForm);
