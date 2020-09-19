import Axios, { AxiosResponse } from 'axios';
import * as membersBE from '../fixtures/members';

export const httpClient = Axios.create({
  baseURL: 'http://localhost:3000',
});

httpClient.interceptors.request.use((config) => {
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    return parseBody(response);
  },
  (error) => {
    console.warn('Error status', error.response.status);
    // return Promise.reject(error)
    if (error.response) {
      return parseError(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

function parseBody(response) {
  //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
  if (response.status === 200) {
    return response.data.result;
  } else {
    return this.parseError(response.data.messages);
  }
}

function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages: messages });
    } else {
      return Promise.reject({ messages: [messages] });
    }
  } else {
    return Promise.reject({ messages: ['エラーが発生しました'] });
  }
}
