import React from 'react';
import Table from '../../../shared/Table/Table';
import { tasksApi } from '../../../../shared/apis';

const headers = ['Area', 'Description', 'Limit date', 'Status'];

const taskTableRowMapper = (task) => {
  return [task.id, task.roleDesc, task.description, task.limitDate.toDateString(), task.statusDesc];
};

const TasksPage = () => {
  const tasks = tasksApi.getTasks();

  const handleSelectTask = (id) => {
    alert(id);
  };

  return (
    <>
      <h3>Team Tasks</h3>
      <Table
        headers={headers}
        body={tasks.map((t) => taskTableRowMapper(t))}
        onRowClick={handleSelectTask}
      />
    </>
  );
};

export default TasksPage;
