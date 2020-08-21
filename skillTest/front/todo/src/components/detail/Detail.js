import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getSingle, deleteSingleTask, editSingleTask } from '../../Api'
import Form from '../form/Form'


const Detail = props => {

  const [ single, setSingle ] = useState('')
  const [value, setValue] = useState(single.title)
  const detail = useState(true)

    
  const { id } = props.match.params
  const { title, completed } = single
  
  let history = useHistory()


  useEffect(() => {
    getSingle(id, setSingle)
  },'')

  
  const goBack = () => {
    history.goBack();
  }

  
  const edit = () => {
    editSingleTask(single, value, setSingle)
  }


  const status = completed ? (
    <label>
        <input type="checkbox" defaultChecked />
        <span></span>
    </label>
    ) : (
    <label>
        <input type="checkbox" />
        <span></span>
    </label>
    )
  
  return (
    <div className="todo-app container">
      <h4 className="center blue-text">Do you want edit this?</h4>
        <div className="todos collection">
            <div className="collection-item myClass">
                {status}
                <span>{title}</span>
                <span>
                <button
                    type="button"
                    className="waves-effect waves-light btn-small deleteColor"
                    onClick={() => {deleteSingleTask(single); goBack()}}>
                    delete
                </button>
                </span>
            </div>
        </div>
        <Form 
          isDetail={detail}
          setSingleValue={setValue}
          singleTitle={title}
          mainPage={goBack}
          editSingle={edit}
          singleTask={single}        
        />
    </div>
  );
};

export default Detail;
