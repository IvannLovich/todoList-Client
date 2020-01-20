import React, { useState, useEffect } from 'react';
import Tasks from './components/tasks/Tasks';
import Form from './components/form/Form';
import axios from 'axios';

const App = () => {
  
  const [todoList, setTodoList] = useState([])

    
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/todo/tasks')
      .then(res => setTodoList(res.data))
      .catch(err => console.log(err));
  },[])
  

  const deleteTask = item => {
    const erased = setTodoList(todoList.filter(el => el !== item))
    axios
      .delete(`http://localhost:8000/api/todo/tasks/${item.id}/`)
      .then(res => erased);
  };

  const submit = item => {
    axios
      .post('http://localhost:8000/api/todo/tasks/', item)
      .then(res => setTodoList([...todoList, item]));

  };

  

  return (
    <div className="todo-app container">
      <h2 className="center blue-text">Listado de tareas</h2>
      <Tasks tasks={todoList} del={deleteTask}/>
      <Form saveTask={submit} />
    </div>
  );
}

export default App;
