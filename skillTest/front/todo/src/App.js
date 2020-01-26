import React, { useState, useEffect } from 'react';
import Tasks from './components/tasks/Tasks';
import Form from './components/form/Form';
import axios from 'axios';

const App = () => {
  
  const [todoList, setTodoList] = useState([])

    
  useEffect(() => {
    axios
      .get('https://djanguno.herokuapp.com/api/todo/tasks/')
      .then(res => setTodoList(res.data))
      .catch(err => console.log(err));
  },[])
  

  const deleteTask = item => {
    const erased = setTodoList(todoList.filter(el => el !== item))
    axios
      .delete(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`)
      .then(res => erased);
  };

  const submit = item => {
    axios
      .post('https://djanguno.herokuapp.com/api/todo/tasks/', {
        method: 'post',
        title: item,
        completed: false,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
      })
      .then(res => setTodoList([...todoList, item ]));
      // .then(res => console.log(res));
  };
  

  console.log(todoList);
  

  
  

  return (
    <div className="todo-app container">
      <h2 className="center blue-text">Listado de tareas</h2>
      <Tasks
      tasks={todoList} 
      del={deleteTask}/>
      <Form saveTask={submit} />
    </div>
  );
}

export default App;
