import React from 'react';

const TodoText = function (props) {
  const backgroundColor = props.isDone ? 'red' : 'green';
  const textDecoration = props.isDone ? 'line-through' : 'none';
  return (
    <div
      onClick={() => props.changeStatus(props.id)}
      className='lines-container'
    >
      <div className='status' style={{ backgroundColor }}></div>
      <span style={{ textDecoration }}>{props.title}</span>
    </div>
  );
};

export default TodoText;
