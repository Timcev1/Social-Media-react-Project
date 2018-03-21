export default (state= [], action) => {
  switch (action.type) {
    case 'GET_PAGES_SUCCESS':
      return action.pages;
    case 'CREATE_POST_SUCCESS':
      return state.concat(action.page);
    default:
      return state;
  }
}
