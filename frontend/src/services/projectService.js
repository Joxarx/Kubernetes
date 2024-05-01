import axios from 'axios';

const API_URL = 'http://localhost:5000/projects';

const getProjects = () => {
  return axios.get(API_URL);
};

const createProject = (project) => {
  return axios.post(API_URL, project);
};

export default {
  getProjects,
  createProject,
};