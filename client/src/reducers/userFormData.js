const initialState = {
    username: '',
    password: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_USER_DATA':
      return action.userFormData
    case 'RESET_USER_FORM':
      return initialState;
    default:
      return state;
  }
}
