import React from 'react';

const TodoText = ({ property, id, changeStatus, title, removeTask }) => {
  const { backgroundColor, textDecoration } = property;
  return (
    <div className='lines-container'>
      <div style={{ textDecoration }} onClick={() => changeStatus(id)}>
        <div className='status' style={{ backgroundColor }}></div>
        {title}
      </div>
      <span className='cancelButton' onClick={() => removeTask(id)}>
        X
      </span>
    </div>
  );
};

export default TodoText;
