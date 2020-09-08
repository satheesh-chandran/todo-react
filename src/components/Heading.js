import React, { useState, useEffect } from 'react';
import TextComponent from './TextComponent';
import { sendRequest, getPostOptions } from './utils';
const DEFAULT = 'TODO';

const Heading = function (props) {
  const [title, editTitle] = useState(DEFAULT);
  const [refreshState, toggleRefreshState] = useState(false);
  const [isHeadingEditable, toggleHeadingEditable] = useState(false);

  useEffect(() => {
    sendRequest('/api/heading', ({ heading }) => editTitle(heading));
  }, [refreshState]);

  const editHeading = heading =>
    fetch('/api/editHeading', getPostOptions({ heading })).then(() => {
      toggleHeadingEditable(false);
      toggleRefreshState(s => !s);
    });

  const reset = () =>
    fetch('/api/resetHeading').then(() => {
      props.clearTasks();
      toggleRefreshState(s => !s);
    });

  if (isHeadingEditable)
    return <TextComponent value={title} onSubmit={editHeading} />;
  return (
    <h1>
      <span onClick={() => toggleHeadingEditable(true)}>{title}</span>
      <span className='clear' onClick={reset}>
        X
      </span>
    </h1>
  );
};

export default Heading;
