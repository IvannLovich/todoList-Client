import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Form from '../form/Form';
import {
  getAll,
  add,
  changeToTrue,
  changeToFalse,
  deleteAllTasks,
} from '../../Api';
import './Tasks.css';

const Tasks = () => {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    getAll(setTodoList);
  }, [todoList]);

  const submit = () => {
    add(value, setTodoList, todoList);
  };

  const tds = todoList.length ? (
    todoList.map((element) => {
      const status =
        element.completed === false ? (
          <label onClick={() => changeToTrue(element)}>
            <input type="checkbox" />
            <span></span>
          </label>
        ) : (
          <label onClick={() => changeToFalse(element)}>
            <input type="checkbox" defaultChecked />
            <span></span>
          </label>
        );
      return (
        <div className="collection-item myClass" key={element.id}>
          {status}
          <span>{element.title}</span>
          <span>
            <Link to={`/${element.id}`}>
              <button
                type="button"
                className="waves-effect waves-light btn-small editColor"
              >
                edit
              </button>
            </Link>
            <button
              type="button"
              className="waves-effect waves-light btn-small deleteColor"
              onClick={() => {
                deleteAllTasks(element, setTodoList, todoList, setValue);
              }}
            >
              delete
            </button>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> No hay tareas cargadas </p>
  );
  return (
    <div className="todo-app container">
      <div className="todos collection">{tds}</div>
      <Form val={value} setVal={setValue} saveTask={submit} />
    </div>
  );
};

export default Tasks;
