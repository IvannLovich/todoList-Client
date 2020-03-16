import React, { useState, useEffect } from 'react';
import Tasks from './components/tasks/Tasks';
import Form from './components/form/Form';
import axios from 'axios';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get('https://djanguno.herokuapp.com/api/todo/tasks/')
      .then(res => {
        console.log(res.data);
        const state = res.data;
        setTodoList(state);
      })
      .catch(err => console.log(err));
    // console.log(res.data);
  }, []);

  const deleteTask = item => {
    const erased = setTodoList(todoList.filter(el => el !== item));
    axios
      .delete(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`)
      .then(res => erased);
  };

  const submit = item => {
    axios
      .post('https://djanguno.herokuapp.com/api/todo/tasks/', {
        title: item,
      })
      .then(res => {
        const element = res.data;
        setTodoList([...todoList, element]);
      });
  };

  const changeStatusToTrue = item => {
    axios
      .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
        title: item.title,
        completed: true,
      })
      .then(res => res.data);
  };

  const changeStatusToFalse = item => {
    axios
      .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
        title: item.title,
        completed: false,
      })
      .then(res => res.data);
  };

  return (
    <div className="todo-app container">
      <h2 className="center blue-text">Listado de tareas</h2>
      <Tasks
        changeToTrue={changeStatusToTrue}
        changeToFalse={changeStatusToFalse}
        tasks={todoList}
        del={deleteTask}
      />
      <Form saveTask={submit} />
    </div>
  );
};

export default App;
