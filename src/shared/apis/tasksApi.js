import { tasksBE } from '../fixtures';

export const getTasks = () => {
  return tasksBE.getAll();
};

export const addTask = (member) => {
  tasksBE.add(member);
};
