import AppConstants from '../constants';
import { actionCreator } from './actionCreator';

// Actions
export const ADD_REQUEST = `${AppConstants.APP_ID}/todos/ADD_REQUEST`;
export const ADD_SUCCESS = `${AppConstants.APP_ID}/todos/ADD_SUCCESS`;
export const ADD_FAIL = `${AppConstants.APP_ID}/todos/ADD_FAIL`;

// Reducer
const initialState = { byId: [], byHash: {} };

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_SUCCESS: {
      const { item, completed, id } = action.todo;
      return {
        byId: [...state.byId, id],
        byHash: {
          ...state.byHash,
          [action.todo.id]: { item, completed },
        },
      };
    }
    default:
      return state;
  }
}

// Action Creators
export const addTodoItem = actionCreator(ADD_REQUEST, 'todo');
export const setTodoItem = actionCreator(ADD_SUCCESS, 'todo');

// Selectors
