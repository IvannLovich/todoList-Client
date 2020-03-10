import React from 'react';
import './Tasks.css';

const Tasks = ({ tasks, del, changeToTrue, changeToFalse }) => {
  const tds = tasks.length ? (
    tasks.map((element, index) => {
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
            <button
              type="button"
              className="waves-effect waves-light btn-small"
            >
              edit
            </button>
            <button
              type="button"
              className="waves-effect waves-light btn-small deleteColor"
              onClick={() => {
                del(element);
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
  return <div className="todos collection">{tds}</div>;
};

export default Tasks;
