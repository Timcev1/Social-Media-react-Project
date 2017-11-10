export const handleLogin = () =>{
  let username = this.refs.username.value;
  return({
    type: 'LOGIN',
    value: username
  });
}

export const handleLogout = () => {
  return({
    type: 'LOGOUT',
    value: 'guest'
  });
  this.refs.username.value = '';
}
