import React, { useState } from 'react';
import './Form.css';

const Form = ({ saveTask }) => {

  const [value, setValue] = useState('')

  // handleChange = e => {
  //   this.setState({
  //     title: e.target.value,
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault()
    saveTask(value)
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Escribe una tarea</label>
        <input 
        type="text" 
        value={value}
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
