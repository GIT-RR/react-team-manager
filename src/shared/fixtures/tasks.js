let tasks = [
  {
    id: 0,
    area: 'tl',
    limitDate: new Date('09/09/2021'),
    description: 'Contract a new database developer',
    status: 1,
  },
  {
    id: 1,
    area: 'dbd',
    limitDate: new Date('09/09/2021'),
    description: 'Re-structure user table',
    status: 1,
  },
  {
    id: 2,
    area: 'fed',
    limitDate: new Date('09/09/2021'),
    description: 'Design new layout for the login page',
    status: 0,
  },
  {
    id: 3,
    area: 'fed',
    limitDate: new Date('09/09/2021'),
    description: 'Add validation to the login form',
    status: 0,
  },
];

export const getAllTasks = () => {
  return tasks;
};

export const addUpdateTask = (task) => {
  if (task.id) {
    const index = tasks.findIndex(function (o) {
      return o.id === task.id;
    });

    tasks.splice(index, 1);
  }

  tasks.push({
    ...task,
    id: task.id || tasks.length,
  });
};

export const deleteTask = (planId) => {
  const index = tasks.findIndex(function (o) {
    return o.id === planId;
  });

  tasks.splice(index, 1);
};
