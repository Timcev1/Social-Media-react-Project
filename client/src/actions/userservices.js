import { authHeader} from '../helpers';
const API_URL = "http://localhost:3000/api"

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  };

  return fetch('API_URL/users/authenticate', requestOptions)
    .then(response => {
      if (!response.ok){
        return Promise.reject(response.statusText)
      }
      return response.json();
    })
    .then(user => {
      if (user && user.token){
        localStorage.setItem('user', JSON.stringify(user))
      }
      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function getAll(){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch('API_URL/users', requestOptions).then(handleResponse)
}

function getById(id){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  return fetch('API_URL/users' + _id, requestOptions).then(handleResponse);
}

function register(user){
  const requestOptions={
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  reutrn fetch('API_URL/users/new', requestOptions).then(handleResponse);
}

function update(user){
  const requestOptions = {
    method: 'POST',
    headers: {...authHeader(), 'Content-Type':'application/json'}
    body: JSon.stringify(user)
  };
  return fetch('API_URL/users' + user.id, requestOptions).then(handleResponse);
}

function _delete(id){
  const requestOptions = {
    method: 'DELETE'
    headers: authHeader()
  };
  return fetch('API_URL/users/' + id, requestOptions).then(handleResponse);
}

function handleResponse(response){
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json()
}
