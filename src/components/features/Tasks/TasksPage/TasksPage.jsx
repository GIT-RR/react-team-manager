import React, { useState } from 'react';
import Table from '../../../shared/Table/Table';
import { tasksApi } from '../../../../shared/apis';
import TaskForm from '../TaskForm/TaskForm';

const headers = ['Area', 'Description', 'Limit date', 'Status'];

const taskTableRowMapper = (task) => {
  debugger;
  return [task.id, task.roleDesc, task.description, task.limitDate.toDateString(), task.statusDesc];
};

const TasksPage = () => {
  const tasks = tasksApi.getTasks();
  const [selectedTask, setSelectedTask] = useState(null);
  const [addTask, setAddTask] = useState(null);

  const handleSelectTask = (id) => {
    if (selectedTask && selectedTask.id === id) {
      setSelectedTask(null);
    } else {
      setSelectedTask(tasks.find((task) => task.id === id));
    }
  };

  const handleAddTask = (task) => {
    tasksApi.addTask(task);
    setAddTask(null);
  };

  const handleEditTask = (task) => {
    tasksApi.editTask(task);
    setSelectedTask(null);
  };

  const handleDeleteTask = (id) => {
    tasksApi.removeTask(id);
    setSelectedTask(null);
  };

  return (
    <>
      <h3>Team Tasks</h3>
      <button onClick={() => setAddTask(!addTask)}>Add a new task</button>
      <Table
        headers={headers}
        body={tasks.map((t) => taskTableRowMapper(t))}
        onRowClick={handleSelectTask}
      />
      {selectedTask && (
        <>
          <TaskForm
            task={selectedTask}
            onSuccess={handleEditTask}
            onCancel={() => {
              setSelectedTask(null);
            }}
          />
          <button value='Delete' onClick={handleDeleteTask} />
        </>
      )}
      {addTask && (
        <TaskForm
          onSuccess={handleAddTask}
          onCancel={() => {
            setAddTask(false);
          }}
        />
      )}
    </>
  );
};

export default TasksPage;
