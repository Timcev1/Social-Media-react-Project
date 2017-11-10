import React, { Component} from 'react';
import {connect} from 'react-redux';
import {updateUserFormData} from '../actions/userform';
import {createUser} from '../actions/users';

 class UserForm extends Component{

   constructor(props) {
     super(props);
     this.state = {};
   }

   handleOnChange = event => {
     const { name, value } = event.target;
     const currentUserFormData = Object.assign({}, this.props.userFormData, {
       [name]: value
     })
     this.props.updateUserFormData(currentUserFormData)
   }

   handleOnSubmit = event => {
     event.preventDefault()
     if (this.props.getUsers(this.props.userFormData)) {

     }
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
            <input type="text" name="username" value={username} onChange={this.handleOnChange} placeholder=" Username "/>
          </div>
          <div>
            <label htmlFor="Content">Password: </label>
            <input type="text" name="password" value={password} onChange={this.handleOnChange} placeholder=" password "/>
          </div>
          <button type="submit">Log In</button>
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
