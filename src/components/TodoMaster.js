import React, { useState, useEffect } from 'react';
import TodoText from './TodoText';
import Heading from './Heading';
import TextComponent from './TextComponent';
import { sendRequest, getPostOptions } from './utils';

/* status = { 0: 'notDone', 1: 'progressing', 2: 'done' } */

const properties = [
  { backgroundColor: 'red', textDecoration: 'none' },
  { backgroundColor: 'orange', textDecoration: 'none' },
  { backgroundColor: 'green', textDecoration: 'line-through' }
];

const TodoMaster = function () {
  const [tasks, setTasks] = useState([]);
  const [refresh, changeRefreshState] = useState(false);
  const toggleRefreshState = () => changeRefreshState(state => !state);

  useEffect(() => {
    sendRequest('/api/getAllItems', tasks => {
      setTasks(tasks.map(task => ({ ...task })));
    });
  }, [refresh]);
  const option = { method: 'POST' };
  const removeTask = id =>
    fetch(`/api/deleteItem/${id}`, option).then(toggleRefreshState);
  const changeStatus = id =>
    fetch(`/api/changeStatus/${id}`, option).then(toggleRefreshState);
  const clearItems = () => fetch('/api/clearItems').then(toggleRefreshState);
  const addTodo = title =>
    sendRequest('/api/addItem', toggleRefreshState, getPostOptions({ title }));

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
      <Heading clearTasks={clearItems} />
      <TextComponent onSubmit={addTodo} value='' />
      <div className='list-container'>{texts}</div>
    </div>
  );
};

export default TodoMaster;
