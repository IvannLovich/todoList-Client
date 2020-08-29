import React from 'react';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
  singleTask,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask(val);
    setVal(e.target.reset());
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setSingleValue(e.target.reset());
  };

  const form = isDetail ? (
    <form onSubmit={handleEdit}>
      <label>Edit</label>
      <input
        type="text"
        defaultValue={singleTitle}
        onChange={(e) => setSingleValue(e.target.value)}
      />
      <button
        type="submit"
        className="waves-effect waves-light btn btnColor"
        onClick={() => {
          mainPage();
          editSingle(singleTask);
        }}
      >
        Save
      </button>
      <button
        type="submit"
        className="waves-effect waves-light btn cancelBtnColor"
        onClick={() => {
          mainPage();
        }}
      >
        Cancel
      </button>
    </form>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>Write a task</label>
      <input
        type="text"
        defaultValue={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Button type="submit">Create</Button>
    </form>
  );
  return (
    <div>
      {form}
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    </div>
  );
};

export default Form;
