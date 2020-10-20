import * as membersBE from '../fixtures/members';
import * as tasksBE from '../fixtures/tasks';

export let axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

mock.onGet('/members').reply(function (request) {
  return [200, membersBE.getAll()];
});

mock.onGet('/tasks').reply(function (request) {
  return [200, tasksBE.getAll()];
});

mock.onGet(/\/members\/\d+/).reply(function (request) {
  const splitted = request.url.split('/');
  const id = +splitted[splitted.length - 1];

  return [200, membersBE.get(id)];
});

mock.onPost('/members/add').reply(function (request) {
  const member = JSON.parse(request.data);
  membersBE.add(member);

  return [200];
});

mock.onPost('/tasks/add').reply(function (request) {
  const task = JSON.parse(request.data);
  tasksBE.add(task);

  return [200];
});

mock.onPost('/members/update').reply(function (request) {
  const member = JSON.parse(request.data);
  membersBE.edit(member);

  return [200];
});

mock.onPost('/tasks/update').reply(function (request) {
  const task = JSON.parse(request.data);
  tasksBE.edit(task);

  return [200];
});

mock.onPost(/\/members\/delete\/\d+/).reply(function (request) {
  console.log('delete');
  const splitted = request.url.split('/');
  const id = +splitted[splitted.length - 1];

  return [200, membersBE.remove(id)];
});
