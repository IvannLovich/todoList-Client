import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
// import {
//   getAll,
//   add,
//   changeToTrue,
//   changeToFalse,
//   deleteTask,
// } from '../../Api';

import './Tasks.css';
import tasks from '../..';

const Tasks = ({ showTasks, listOfTasks, addTask }) => {
  // const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState('');
  const [isTaskLoad, setIsTaskLoad] = useState(false);

  useEffect(() => {
    showTasks();
  }, [showTasks]);

  // const submit = () => {
  // add(value, setTodoList, todoList);
  // };

  const tds = listOfTasks.length ? (
    listOfTasks.map((element) => {
      // const status =
      //   element.completed === false ? (
      //     <label onClick={() => changeToTrue(element)}>
      //       <input type="checkbox" />
      //       <span></span>
      //     </label>
      //   ) : (
      //     <label onClick={() => changeToFalse(element)}>
      //       <input type="checkbox" defaultChecked />
      //       <span></span>
      //     </label>
      //   );
      return (
        <div className="collection-item myClass" key={element.id}>
          {/* {status} */}
          <span>{element.title}</span>
          <span>
            {/* <Link to={`/${element.id}`}> */}
            <Button
              type="button"
              className="waves-effect waves-light btn-small editColor"
            >
              edit
            </Button>
            {/* </Link> */}
            <Button
              type="button"
              className="waves-effect waves-light btn-small deleteColor"
              // onClick={() => {
              //   deleteTask(element, setTodoList, todoList, setValue);
              // }}
            >
              delete
            </Button>
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
      <Input
        placeholder="Enter a task"
        defaultValue={isTaskLoad && ''}
        onChange={(event) => setValue(event.target.value)}
        onPressEnter={() =>
          addTask({ title: value }).then(() => {
            showTasks();
            setIsTaskLoad(true);
          })
        }
      />
      {/* <Form val={value} setVal={setValue} saveTask={submit} /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  listOfTasks: tasks.selectors.getListOfTasks(state),
});

const mapDispatchToProps = {
  showTasks: tasks.actions.showTasks,
  addTask: tasks.actions.addTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
