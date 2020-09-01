import React from 'react';

export default ({ property, id, changeStatus, title, removeTask }) => {
  const { color, decoration } = property;
  return (
    <div className='lines-container'>
      <div
        style={{ textDecoration: decoration }}
        onClick={() => changeStatus(id)}
      >
        <div className='status' style={{ backgroundColor: color }}></div>
        {title}
      </div>
      <div className='cancelButton' onClick={() => removeTask(id)}>
        X
      </div>
    </div>
  );
};
