import React, {Component} from 'react'
import {handleLogin, handleLogout} from '../actions/users'

 class UserLogin extends Component{

  render() {
    let button;
    if(this.props.state.status === 'logged in'){
      button = <button onClick={this.handleLogout}>Log out</button>
    }else {
      button = <input type="button" value="Login" onClick={this.handleLogin}/>
    };
    return (
      <div>
      <input type="text" ref="username"/>
        {button}
      <p> Current state is {this.props.state.status + ' as ' + this.props.state.value}</p>
      </div>
    );
  }
}

export default UserLogin;
