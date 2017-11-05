import {GET_POST, GET_POSTS, CREATE_POST, DELETE_POST} from './types';
import axios from 'axios';

const APP_URL = "http://localhost:3000/";

export function getPosts(){
  const request = axios.get(`${APP_URL}/posts`);
  return{
    type: GET_POSTS,
    payload: request
  }
}

export function getPost(id){
  const request = axios.get(`${APP_URL}/post/${id}`);
  return {
    type: GET_POST,
    payload: request
  }
}

export function createArticle(props){
  const request = axios.post(`${APP_URL}/posts`, props);
  return{
    type: CREATE_POST,
    payload: request
  }
}

export function deletePost(id){
  const request = axios.delete(`${APP_URL}/posts/${id}`);
  return {
    type: GET_POST,
    payload: request
  }
}
