import React, { useState } from 'react';
import TodoText from './TodoText';
import Heading from './Heading';
import TextComponent from './TextComponent';

/* status = { 0: 'notDone', 1: 'progressing', 2: 'done' } */

const properties = [
  { color: 'red', decoration: 'none' },
  { color: 'orange', decoration: 'none' },
  { color: 'green', decoration: 'line-through' }
];

const TodoMaster = function () {
  const [tasks, setTasks] = useState([]);
  const [currentId, updateId] = useState(0);

  const clearTasks = () => {
    setTasks([]);
    updateId(0);
  };

  const removeTask = id =>
    setTasks(taskList => taskList.filter(task => task.id !== id));

  const addTodo = title => {
    setTasks(taskList => taskList.concat({ status: 0, title, id: currentId }));
    updateId(id => id + 1);
  };

  const changeStatus = id => {
    setTasks(taskList => {
      const position = taskList.findIndex(task => task.id === id);
      const updatedList = [...taskList];
      const task = { ...updatedList[position] };
      task.status = (task.status + 1) % properties.length;
      updatedList[position] = task;
      return updatedList;
    });
  };

  const texts = tasks.map(({ status, title, id }) => (
    <TodoText
      id={id}
      key={id}
      title={title}
      changeStatus={changeStatus}
      property={properties[status]}
      removeTask={removeTask}
    />
  ));

  return (
    <div className='master'>
      <Heading clearTasks={clearTasks} />
      <TextComponent onSubmit={addTodo} value='' />
      <div className='list-container'>{texts}</div>
    </div>
  );
};

export default TodoMaster;
