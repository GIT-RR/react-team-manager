import { axios } from './request';

export const login = (email, password) => {
  return axios
    .post('/login', { email, password })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
