import axios from 'axios';

export const fetchTodos = () => {
  // return axios.get('todos');
  return axios({
    url: 'todos',
    method: 'get',
    headers: {},
  });
};

export const fetchPosts = () => {
  return axios.get('posts');
};

export const fetchUserss = () => {
  return axios.get('/users');
};
