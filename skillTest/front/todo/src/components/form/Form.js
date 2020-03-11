import React, { useState } from 'react';
import './Form.css';

const Form = ({ saveTask, edit, task }) => {

  const [value, setValue] = useState('')
 
  const handleSubmit = e => {
    e.preventDefault()
    saveTask(value)
    setValue(e.target.reset())
  };

  // const result = 
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Escribe la tarea</label>
        <input 
        type="text"
        defaultValue={task !== [] ? task.title : value}
        onChange={e => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="waves-effect waves-light btn buttonColor"
        >
          Crear tarea
        </button>
      </form>
    </div>
  );
}

export default Form;
