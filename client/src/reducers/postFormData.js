export default (state = {
  title: '',
  content: ''
}, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.postFormData
    default:
      return state;
  }
}
