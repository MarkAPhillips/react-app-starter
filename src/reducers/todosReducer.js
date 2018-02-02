import AppConstants from '../constants';
import { actionCreator } from './actionCreator';
import toHash from '../utils/toHash';

// Actions
export const ADD_REQUEST = `${AppConstants.APP_ID}/todos/ADD_REQUEST`;
export const ADD_SUCCESS = `${AppConstants.APP_ID}/todos/ADD_SUCCESS`;
export const ADD_FAIL = `${AppConstants.APP_ID}/todos/ADD_FAIL`;
export const LOAD_REQUEST = `${AppConstants.APP_ID}/todos/LOAD_REQUEST`;
export const LOAD_SUCCESS = `${AppConstants.APP_ID}/todos/LOAD_SUCCESS`;
export const LOAD_FAIL = `${AppConstants.APP_ID}/todos/LOAD_FAIL`;

// Reducer
const initialState = { list: {} };

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_SUCCESS: {
      const { item, completed, id } = action.todo;
      return {
        list: {
          ...state.list,
          [id]: { id, item, completed },
        },
      };
    }
    case LOAD_SUCCESS: {
      return Object.assign({}, state, { list: toHash(action.todos) });
    }
    default:
      return state;
  }
}


// Action Creators
export const addTodoItem = actionCreator(ADD_REQUEST, 'todo');
export const setTodoItem = actionCreator(ADD_SUCCESS, 'todo');
export const getTodoItems = actionCreator(LOAD_REQUEST);
export const setTodoItems = actionCreator(LOAD_SUCCESS, 'todos');

// Selectors
export const todosSelector = state => state.todos.list;
