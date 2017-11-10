import {resetuserForm} from './userform.js'

const API_URL = "http://localhost:3000/api"


const addUser = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

export const createUser = user => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(user => {
      dispatch(addUser(user))
      dispatch(resetuserForm())
    })
    .catch(error => console.log(error))
  }
}
