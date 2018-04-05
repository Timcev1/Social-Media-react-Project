export default (state= [], action) => {
  switch (action.type) {
    case 'GET_PAGES_SUCCESS':
      return action.pages;
    default:
      return state;
  }
}
