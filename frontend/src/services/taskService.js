import axios from 'axios';

const API_URL = 'http://localhost:5001/tasks';

const getTasks = () => {
  return axios.get(API_URL);
};

const createTask = (task) => {
  return axios.post(API_URL, task);
};

export default {
  getTasks,
  createTask,
};