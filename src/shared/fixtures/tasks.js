import { statuses, roles } from './commons';

let tasks = [
  {
    id: 0,
    role: 'tl',
    limitDate: new Date('09/11/2021'),
    description: 'Contract a new database developer',
    status: 1,
  },
  {
    id: 1,
    role: 'dbd',
    limitDate: new Date('09/10/2021'),
    description: 'Re-structure user table',
    status: 1,
  },
  {
    id: 2,
    role: 'fed',
    limitDate: new Date('09/09/2021'),
    description: 'Design new layout for the login page',
    status: 0,
  },
  {
    id: 3,
    role: 'fed',
    limitDate: new Date('09/08/2021'),
    description: 'Add validation to the login form',
    status: 0,
  },
];

const taskMapper = (task) => {
  return {
    ...task,
    statusDesc: statuses.find((s) => s.value === task.status)?.name || 'Undefined',
    roleDesc: roles.find((r) => r.value === task.role)?.name || 'No role',
  };
};

export const getAll = () => {
  return tasks.map((t) => taskMapper(t));
};

export const add = (task) => {
  tasks.push({
    ...task,
    id: tasks.length,
  });
};

// export const deleteTask = (planId) => {
//   const index = tasks.findIndex(function (o) {
//     return o.id === planId;
//   });

//   tasks.splice(index, 1);
// };
