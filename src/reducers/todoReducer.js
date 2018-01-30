import uuidv4 from 'uuid/v4';
import AppConstants from '../constants';
import { actionCreator } from './actionCreator';

// Actions
export const ADD = `${AppConstants.APP_ID}/todos/ADD`;

// Reducer
const initialState = { byId: [], byHash: {} };

export default function todos(state = initialState, action) {
  let id;
  switch (action.type) {
    case ADD:
      id = uuidv4();
      return {
        byId: [...state.byId, id],
        byHash: {
          ...state.byHash,
          [id]: { todo: action.todo, completed: false },
        },
      };
    default:
      return state;
  }
}

// Action Creators
export const addTodoItem = actionCreator(ADD, 'todo');

// Selectors

