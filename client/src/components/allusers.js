import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/users';
import UserCard from './usercard.js';
import UserForm from './newuser'

class AllUsers extends Component {

  componentDidMount(){
    this.props.getUsers()
  }

  render() {
    return(
      <div className="usersContainer">
        <h2> Users</h2>
        {this.props.users.map(user => <UserCard key={user.id} user={user} />)}
        <div>
          <UserForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    users: state.users
  })
}

export default connect(mapStateToProps, {getUsers})(AllUsers);
