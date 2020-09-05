import React, { useState, useEffect } from 'react';

const useTimer = function () {
  const [count, updateCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => updateCount(c => c + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return count;
};

const Timer = function () {
  const count = useTimer();
  return <p>{count}</p>;
};

const Counter = function () {
  const [status, updateStatus] = useState(false);
  return (
    <div>
      {status ? <Timer /> : <></>}
      <button onClick={() => updateStatus(stat => !stat)}>update</button>
    </div>
  );
};

export default Counter;
