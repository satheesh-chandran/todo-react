import React from 'react';
import './App.css';
import TodoMaster from './components/TodoMaster';
import Hoc from './higherOrders/Hoc';

const App = function () {
  return (
    <div>
      <Hoc></Hoc>
      <TodoMaster />
    </div>
  );
};

export default App;
