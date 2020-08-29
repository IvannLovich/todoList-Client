import React from 'react';
import Tasks from '../tasks/Tasks';

const Main = () => {
  return (
    <div className="todo-app container">
      <h2 className="center blue-text">ToDo</h2>
      <Tasks />
    </div>
  );
};

export default Main;
