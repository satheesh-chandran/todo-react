import React from 'react';

const TodoText = function (props) {
  const colors = ['red', 'orange', 'green'];
  const decorations = ['none', 'none', 'line-through'];
  return (
    <div
      onClick={() => props.changeStatus(props.id)}
      className='lines-container'
    >
      <div
        className='status'
        style={{ backgroundColor: colors[props.status] }}
      ></div>
      <span style={{ textDecoration: decorations[props.status] }}>
        {props.title}
      </span>
    </div>
  );
};

export default TodoText;
