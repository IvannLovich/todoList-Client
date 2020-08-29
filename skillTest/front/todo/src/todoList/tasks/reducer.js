import Immutable from 'seamless-immutable';
import * as types from './constants';

const initialState = Immutable({
  listOfTasks: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_SUCCESS:
      console.log(action.payload.data);
      return state.merge({
        listOfTasks: action.payload.data,
      });

    default:
      return state;
  }
};
