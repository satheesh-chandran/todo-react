import React, { useState } from 'react';

const TextComponent = function (props) {
  const [value, updateValue] = useState(props.value);
  const onKeyDown = ({ keyCode }) => {
    if (keyCode === 13 && value !== '') {
      props.onSubmit(value);
      updateValue('');
    }
  };

  return (
    <div className='text'>
      <input
        value={value}
        onChange={eve => updateValue(eve.target.value)}
        placeholder='Enter Title'
        onKeyDown={onKeyDown}
        autoFocus
      ></input>
    </div>
  );
};

export default TextComponent;
