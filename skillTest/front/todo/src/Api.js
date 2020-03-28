import axios from 'axios';


export const getAll = setTaskState => {
    axios
    .get('https://djanguno.herokuapp.com/api/todo/tasks/')
    .then(res => {
      setTaskState(res.data)
      // console.log(res.data);
      })
      .catch(err => console.log(err));
}

export const getSingle = (id, setSingleState) => {
  axios
    .get(`https://djanguno.herokuapp.com/api/todo/tasks/${id}`)
    .then(res => {
      setSingleState(res.data)
      // console.log(res.data);
        
      })
      .catch(err => console.log(err));
}

export const add = (item, setTaskState, taskState) => {
  axios
  .post('https://djanguno.herokuapp.com/api/todo/tasks/', {
    title: item,
  })
  .then(res => {
    const element = res.data
    setTaskState([...taskState, element])
  });
};

export const deleteSingleTask = item => {
  axios
  .delete(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`)
  .then(res => res.data);
};


export const editSingleTask = (item, value, setSingleTask) => {
  axios
    .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
      title: value,
      completed: item.completed
    })
    .then(res => {
      setSingleTask(res.data)
    });    
}


export const changeToTrue = item => {
  axios
    .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
      title: item.title,
      completed: true
    })
    .then(res => res.data);
}

export const changeToFalse = item => {
  axios
    .put(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`, {
      title: item.title,
      completed: false
    })
    .then(res => res.data);
}


export const deleteAllTasks = (item, setTaskState, taskState, setFormValue)  => {
  const erased = setTaskState(taskState.filter(el => el !== item))
  axios
  .delete(`https://djanguno.herokuapp.com/api/todo/tasks/${item.id}/`)
  .then(res => erased);
  // setSingle(false)
  setFormValue('')
};