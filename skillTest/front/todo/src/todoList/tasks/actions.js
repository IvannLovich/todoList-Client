import * as types from './constants';

export const showTasks = () => async (dispatch) => {
  const response = await dispatch({
    type: types.FETCH_TASKS,
    payload: {
      request: {
        url: '/todo/tasks/',
        method: 'GET',
      },
    },
  });
  if (response.error) {
    return Promise.reject(response.error);
  }
  return response;
};

export const addTask = (data = {}) => async (dispatch) => {
  const response = await dispatch({
    type: types.CREATE_TASK,
    payload: {
      request: {
        url: '/todo/tasks/',
        method: 'POST',
        data,
      },
    },
  });
  if (response.error) {
    return Promise.reject(response.error);
  }
  return response;
};
