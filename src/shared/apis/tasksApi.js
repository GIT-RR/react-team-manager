import { axios } from './request';

export const getTasks = () => {
  return axios
    .get('/tasks')
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const addTask = (task) => {
  return axios
    .post('/tasks/add', task)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const editTask = (task) => {
  return axios
    .post('/tasks/update', task)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
