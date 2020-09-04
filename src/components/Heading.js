import React, { useState } from 'react';
import TextComponent from './TextComponent';
const DEFAULT = 'TODO';

const headingEditable = state => {
  return { isHeadingEditable: true, heading: state.heading };
};

const resettingHeading = state => {
  return { heading: DEFAULT, isHeadingEditable: state.isHeadingEditable };
};

const Heading = function (props) {
  const [state, setState] = useState({
    heading: DEFAULT,
    isHeadingEditable: false
  });
  const reset = () => {
    props.clearTasks();
    setState(resettingHeading);
  };
  const editHeading = heading =>
    setState({ heading, isHeadingEditable: false });
  if (state.isHeadingEditable)
    return <TextComponent value={state.heading} onSubmit={editHeading} />;
  return (
    <h1>
      <span onClick={() => setState(headingEditable)}>{state.heading}</span>
      <span className='clear' onClick={reset}>
        X
      </span>
    </h1>
  );
};

export default Heading;
