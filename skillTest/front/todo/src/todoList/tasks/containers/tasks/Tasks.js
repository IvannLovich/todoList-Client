import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import './Tasks.css';
import tasks from '../..';

const Tasks = ({ showTasks, listOfTasks, addTask }) => {
  const [value, setValue] = useState('');
  const [isTaskLoad, setIsTaskLoad] = useState(false);

  useEffect(() => {
    showTasks();
  }, [showTasks]);

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

  const clearInput = (target) => target.value === value && (target.value = '');

  return (
    <div className="todo-app container">
      <div className="todos collection">{tds}</div>
      <Input
        placeholder="Enter a task"
        onChange={(event) => setValue(event.target.value)}
        onPressEnter={() =>
          addTask({ title: value }).then(() => {
            showTasks();
            setValue('');
          })
        }
      />
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
