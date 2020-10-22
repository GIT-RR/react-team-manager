import React, { useState, useEffect } from 'react';
import Table from '../../shared/Table/Table';
import { tasksApi } from '../../../shared/apis';
import { TaskForm } from '../../features/Tasks';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

const headers = ['Area', 'Description', 'Status'];

const taskTableRowMapper = (task) => {
  return [task.id, task.roleDesc, task.description, task.statusDesc];
};

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [addTask, setAddTask] = useState(null);

  const getTasks = async () => {
    const taskRes = await tasksApi.getTasks();
    setTasks(taskRes);
  };

  useEffect(() => {
    getTasks();
  }, []);

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
    getTasks();
  };

  const handleEditTask = (task) => {
    tasksApi.editTask(task);
    setSelectedTask(null);
    getTasks();
  };

  return (
    <AuthLayout>
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
    </AuthLayout>
  );
};

export default TasksPage;
