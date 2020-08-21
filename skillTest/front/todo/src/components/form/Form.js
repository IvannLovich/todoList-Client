import React from 'react';
import './Form.css';

const Form = ({ 
  val, 
  setVal, 
  saveTask, 
  isDetail, 
  setSingleValue, 
  singleTitle, 
  editSingle, 
  mainPage, 
  singleTask }) => {


  const handleSubmit = e => {
    e.preventDefault()
    saveTask(val)
    setVal(e.target.reset())
  };

  const handleEdit = e => {
    e.preventDefault()
    setSingleValue(e.target.reset())
  };

  const form = isDetail ? (
    <form onSubmit={handleEdit}>
          <label>Edit</label>
          <input 
          type="text"
          defaultValue={singleTitle}
          onChange={e => setSingleValue(e.target.value)}
          />
          <button
            type="submit"
            className="waves-effect waves-light btn btnColor"
            onClick={() => { mainPage(); editSingle(singleTask) }}>
            Save
          </button>
          <button
            type="submit"
            className="waves-effect waves-light btn cancelBtnColor"
            onClick={() => { mainPage() }}>
            Cancel
          </button>
    </form>
  ) : (
    <form onSubmit={handleSubmit}>
          <label>Write a task</label>
          <input 
          type="text"
          defaultValue={val}
          onChange={e => setVal(e.target.value)}
          />
          <button
            type="submit"
            className="waves-effect waves-light btn createBtn">
            Create
          </button>
    </form>
  )

 

  
  return (
    <div>
      {form}
    </div>
  );
}

export default Form;
