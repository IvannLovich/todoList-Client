import React, { useState, useEffect } from 'react';
import Tasks from './components/tasks/Tasks';
import Form from './components/form/Form';
import axios from 'axios';

const App = () => {
  
  const [todoList, setTodoList] = useState([])

    
  useEffect(() => {
    axios
      .get('https://djanguno.herokuapp.com/api/todo/tasks/')
      .then(res => {
        setTodoList(res.data)
        console.log(res.data);
      })
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
        title: item,
      })
      .then(res => {
        const element = res.data
        setTodoList([...todoList, element])
      });

  };
  

  const changeStatusToTrue = item => {
    // console.log(item.completed = true)
    axios
      .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
        title: item.title,
        completed: true
      })
      .then(res => res.data
        // let status = res.data.completed 
        // let p = comp.completed;
        // let change = {...todoList, [completed]: true};
        // setTodoList({...todoList, comp})

      );
  }


  const changeStatusToFalse = item => {
    // console.log(item.completed = true)
    axios
      .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
        title: item.title,
        completed: false
      })
      .then(res => res.data
        // let status = res.data.completed 
        // let p = comp.completed;
        // let change = {...todoList, [completed]: true};
        // setTodoList({...todoList, comp})

      );
  }

  // console.log(todoList);
  



  return (
    <div className="todo-app container">
      <h2 className="center blue-text">Listado de tareas</h2>
      <Tasks
      changeToTrue={changeStatusToTrue}
      changeToFalse={changeStatusToFalse}
      tasks={todoList} 
      del={deleteTask}/>
      <Form saveTask={submit} />
    </div>
  );
}

export default App;
