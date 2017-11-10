import React, {Component} from 'react'


 class UserLogin extends Component{

  render() {
    let button;
    if(this.props.status === 'logged in'){
      button = <button onClick={this.handleLogout}>Log out</button>
    }else {
      button = <input type="button" value="Login" onClick={this.handleLogin}/>
    };
    return (
      <div>
      <input type="text" ref="username"/>
        {button}
      <p> Current state is {this.props.username + ' as ' + this.props.value}</p>
      </div>
    );
  }
}

export default UserLogin;
