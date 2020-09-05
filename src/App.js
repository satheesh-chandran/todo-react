import React from 'react';
import './App.css';
import TodoMaster from './components/TodoMaster';
import Hoc from './higherOrders/Hoc';
import Counter from './higherOrders/Counter';

const App = function () {
  return (
    <div>
      <Hoc></Hoc>
      <Counter />
      <TodoMaster />
    </div>
  );
};

export default App;
