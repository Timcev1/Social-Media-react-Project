const API_URL = "http://localhost:3000/api"

export const setPosts = posts => {
  return {
    type: 'GET_POSTS_SUCCESS',
    posts
  }
}

export const getPosts = () => {
  return dispatch => {
    return fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(posts => dispatch(setPosts))
      .catch(error => console.log(error))
    }
  }

export const createPost = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({post: post})
    })
    .then(response => response.json)
    .then(post => {debugger})
    .catch(error => console.log(error))
  }
}
