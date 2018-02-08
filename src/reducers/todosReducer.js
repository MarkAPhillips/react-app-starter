import { API } from '../constants';
import { actionCreator } from './actionCreator';
import toHash from '../utils/toHash';

// Actions
export const ADD_REQUEST = `${API.APP_ID}/todos/ADD_REQUEST`;
export const ADD_SUCCESS = `${API.APP_ID}/todos/ADD_SUCCESS`;
export const ADD_FAIL = `${API.APP_ID}/todos/ADD_FAIL`;
export const LOAD_REQUEST = `${API.APP_ID}/todos/LOAD_REQUEST`;
export const LOAD_SUCCESS = `${API.APP_ID}/todos/LOAD_SUCCESS`;
export const LOAD_FAIL = `${API.APP_ID}/todos/LOAD_FAIL`;

// Reducer
const initialState = { list: {} };

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_SUCCESS: {
      const { payload } = action;
      const { item, completed, id } = payload;
      return {
        list: {
          ...state.list,
          [id]: { id, item, completed },
        },
      };
    }
    case LOAD_SUCCESS: {
      return Object.assign({}, state, { list: toHash(action.payload) });
    }
    default:
      return state;
  }
}


// Action Creators
export const addTodoItem = actionCreator(ADD_REQUEST, 'payload');
export const setTodoItem = actionCreator(ADD_SUCCESS, 'payload');
export const getTodoItems = actionCreator(LOAD_REQUEST);
export const setTodoItems = actionCreator(LOAD_SUCCESS, 'payload');

// Selectors
export const todosSelector = state => state.todos.list;
