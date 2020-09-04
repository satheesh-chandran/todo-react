import React, { useState } from 'react';
import Input from './Input';
import withValidation from './validation';

const ValidatedInput = withValidation(Input, text => text.length <= 5);

const HigherOrder = props => {
  const [value, changeValue] = useState('');
  return (
    <div>
      <ValidatedInput changeText={changeValue} />
      <p>{value}</p>
    </div>
  );
};

export default HigherOrder;
