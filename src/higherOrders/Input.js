import React, { useState } from 'react';

const Input = function (props) {
  const [title, changeTitle] = useState('');
  const resetTitle = event => {
    const value = event.target.value;
    props.onChange(value);
    changeTitle(value);
  };
  return <input value={title} onChange={resetTitle}></input>;
};

export default Input;
