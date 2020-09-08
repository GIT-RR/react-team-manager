import { tasksBE } from '../fixtures';

export const getTasks = () => {
  return tasksBE.getAll();
};

export const addTask = (task) => {
  tasksBE.add(task);
};

export const editTask = (task) => {
  tasksBE.edit(task);
};

export const removeTask = (id) => {
  tasksBE.remove(id);
};
