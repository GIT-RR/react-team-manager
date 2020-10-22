import { axios } from './request';

export const getMembers = () => {
  return axios
    .get('/members')
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const getMember = (id) => {
  return axios
    .get('/members/' + id)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const addMember = (member) => {
  return axios
    .post('/members/add', member)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const updateMember = (member) => {
  return axios
    .post('/members/update', member)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const removeMember = (id) => {
  return axios
    .post('/members/delete/' + id)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
