import React, { useState, useEffect } from 'react';
import Tasks from '../tasks/Tasks';
import Form from '../form/Form';
import axios from 'axios';

const Main = () => {
  
  const [todoList, setTodoList] = useState([])
  const [oneTask, setOneTask] = useState([])

    
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
  
  const getOneTask = item => {
    axios
      .get(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`)
      .then(res => {
        setOneTask(res.data)
        // console.log(oneTask)
      });
  }

  const editTitleTask = item => {
    axios
      .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
        title: item.title,
        completed: item.completed
      })
      .then(res => res.data);
  }

  const changeStatusToTrue = item => {
    axios
      .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
        title: item.title,
        completed: true
      })
      .then(res => res.data);
  }


  const changeStatusToFalse = item => {
    axios
      .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
        title: item.title,
        completed: false
      })
      .then(res => res.data);
  }

  
  return (
    <div className="todo-app container">
      <h2 className="center blue-text">Listado de tareas</h2>
      <Tasks
        changeToTrue={changeStatusToTrue}
        changeToFalse={changeStatusToFalse}
        tasks={todoList} 
        del={deleteTask}
        singleTask={getOneTask}/>
      <Form 
        saveTask={submit}
        task={oneTask}
        edit={editTitleTask}
        />
    </div>
  );
}

export default Main;
