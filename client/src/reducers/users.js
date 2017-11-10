const initialuser = {
    status: 'logged out',
    value: 'guest'
}
export default (state = initialuser, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        status: 'logged in',
        value: action.value
      })
      case 'LOGOUT':
        return Object.assign({}, state, {
          status: 'logged out',
          value: action.value
        })
    default:
      return state;
  }
}
