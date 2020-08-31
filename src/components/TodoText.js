import React from 'react';

export default function ({ property, id, changeStatus, title }) {
  const { color, decoration } = property;
  return (
    <div onClick={() => changeStatus(id)} className='lines-container'>
      <div className='status' style={{ backgroundColor: color }}></div>
      <span style={{ textDecoration: decoration }}>{title}</span>
    </div>
  );
}
